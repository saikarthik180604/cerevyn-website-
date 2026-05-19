console.log("Cerevyn AI Website Loaded");

document.addEventListener('DOMContentLoaded', function () {
    const tabSections = [
        { buttons: document.querySelectorAll('.tab-button'), grids: document.querySelectorAll('.roles-grid') },
        { buttons: document.querySelectorAll('.career-tab-button'), grids: document.querySelectorAll('.career-grid') }
    ];

    tabSections.forEach(section => {
        section.buttons.forEach(button => {
            button.addEventListener('click', function () {
                section.buttons.forEach(btn => btn.classList.remove('active'));
                section.grids.forEach(grid => grid.classList.remove('active'));

                const target = this.getAttribute('data-target');
                if (target) {
                    const targetGrid = document.getElementById(target);
                    if (targetGrid) targetGrid.classList.add('active');
                }
                this.classList.add('active');
            });
        });

        const activeButton = Array.from(section.buttons).find(btn => btn.classList.contains('active'));
        if (activeButton) {
            activeButton.click();
        }
    });
});