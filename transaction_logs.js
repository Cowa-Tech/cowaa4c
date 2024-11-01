document.addEventListener('DOMContentLoaded', function() {
    // Function to filter transactions
    function filterTransactions(type) {
        const sections = document.querySelectorAll('.transaction-section');
        sections.forEach(section => {
            if (type === 'all' || section.querySelector('h3').textContent.toLowerCase().includes(type)) {
                section.style.display = 'block';
            } else {
                section.style.display = 'none';
            }
        });
    }

    // Create filter buttons
    const filterContainer = document.createElement('div');
    filterContainer.className = 'filter-container';
    filterContainer.innerHTML = `
        <button class="filter-btn active" data-filter="all">All</button>
        <button class="filter-btn" data-filter="transaction">Transactions</button>
        <button class="filter-btn" data-filter="bonus">Bonuses</button>
        <button class="filter-btn" data-filter="commission">Commissions</button>
        <button class="filter-btn" data-filter="transfer">Transfers</button>
        <button class="filter-btn" data-filter="withdrawal">Withdrawals</button>
        <button class="filter-btn" data-filter="deposit">Deposits</button>
    `;

    const transactionLogsContainer = document.querySelector('.transaction-logs-container');
    transactionLogsContainer.insertBefore(filterContainer, transactionLogsContainer.firstChild);

    // Add click event listeners to filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            filterTransactions(this.getAttribute('data-filter'));
        });
    });

    // Function to sort transactions by date
    function sortTransactionsByDate(ascending = true) {
        const sections = document.querySelectorAll('.transaction-section');
        sections.forEach(section => {
            const tbody = section.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            rows.sort((a, b) => {
                const dateA = new Date(a.cells[0].textContent);
                const dateB = new Date(b.cells[0].textContent);
                return ascending ? dateA - dateB : dateB - dateA;
            });
            rows.forEach(row => tbody.appendChild(row));
        });
    }

    // Create sort buttons
    const sortContainer = document.createElement('div');
    sortContainer.className = 'sort-container';
    sortContainer.innerHTML = `
        <button class="sort-btn" data-sort="asc">Sort Ascending</button>
        <button class="sort-btn" data-sort="desc">Sort Descending</button>
    `;

    transactionLogsContainer.insertBefore(sortContainer, filterContainer.nextSibling);

    // Add click event listeners to sort buttons
    const sortButtons = document.querySelectorAll('.sort-btn');
    sortButtons.forEach(button => {
        button.addEventListener('click', function() {
            sortButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            sortTransactionsByDate(this.getAttribute('data-sort') === 'asc');
        });
    });
});