// Task Manager JavaScript functionality

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskTable = document.getElementById('taskTable');
    const contactForm = document.getElementById('contactForm');
    
    // Load tasks from localStorage
    loadTasks();
    
    // Add task event listener
    if (addTaskBtn) {
        addTaskBtn.addEventListener('click', addTask);
    }
    
    // Contact form submission event listener
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }
    
    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        
        if (taskText === '') {
            alert('Please enter a task!');
            return;
        }
        
        // Create new task object
        const task = {
            id: Date.now(),
            text: taskText,
            status: 'Pending'
        };
        
        // Add task to localStorage
        const tasks = getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        
        // Add task to table
        addTaskToTable(task);
        
        // Clear input
        taskInput.value = '';
    }
    
    // Function to add task to table
    function addTaskToTable(task) {
        const tbody = taskTable.querySelector('tbody');
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${task.text}</td>
            <td>
                <select class="status-select" data-id="${task.id}">
                    <option value="Pending" ${task.status === 'Pending' ? 'selected' : ''}>Pending</option>
                    <option value="In Progress" ${task.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                    <option value="Completed" ${task.status === 'Completed' ? 'selected' : ''}>Completed</option>
                </select>
            </td>
        `;
        
        tbody.appendChild(row);
        
        // Add event listener to status select
        const statusSelect = row.querySelector('.status-select');
        statusSelect.addEventListener('change', function() {
            updateTaskStatus(this.dataset.id, this.value);
        });
    }
    
    // Function to update task status
    function updateTaskStatus(id, status) {
        const tasks = getTasks();
        const task = tasks.find(task => task.id == id);
        
        if (task) {
            task.status = status;
            localStorage.setItem('tasks', JSON.stringify(tasks));
        }
    }
    
    // Function to get tasks from localStorage
    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks') || '[]');
    }
    
    // Function to load tasks from localStorage
    function loadTasks() {
        if (!taskTable) return;
        
        const tasks = getTasks();
        const tbody = taskTable.querySelector('tbody');
        tbody.innerHTML = '';
        
        tasks.forEach(task => {
            addTaskToTable(task);
        });
    }
});
