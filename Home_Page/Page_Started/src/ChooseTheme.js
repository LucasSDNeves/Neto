
// export function ChooseTheme () {

    document.addEventListener('DOMContentLoaded', () => {
        const dropdown = document.getElementById('themeDropdown');

        if (!dropdown) return;

        const trigger = dropdown.querySelector('.dropdown-trigger');
        const items = dropdown.querySelectorAll('.dropdown-item');
        const activeName = dropdown.querySelector('.active-name');
        const activePreview = dropdown.querySelector('.active-preview');

        document.addEventListener('click', (e) => {

            if (e.target.closest('.dropdown-trigger') === trigger) {
                e.stopPropagation();
                dropdown.classList.toggle('open')
            } else {
                dropdown.classList.remove('open');
            }
        });

        items.forEach(item => {
            item.addEventListener('click', () => {
                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const theme = item.getAttribute('data-theme');
                const themeName = item.getAttribute('data-name');

                activeName.textContent = `//TEMA: ${themeName}`;
                activePreview.className = `active-preview preview-${theme}`;

                document.body.setAttribute('data-theme', theme);

            });
        });
    });

// }
