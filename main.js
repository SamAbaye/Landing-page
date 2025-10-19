
        const actionModal = document.getElementById('action-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');

        /**
         * Opens the modal with a custom title and message.
         * @param {string} title - The title of the modal.
         * @param {string} message - The main message content.
         */
        function openModal(title, message) {
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            actionModal.classList.remove('hidden');
        }

        /**
         * Closes the modal.
         */
        function closeModal() {
            actionModal.classList.add('hidden');
        }

        /**
         * Handles the click for "APPLY NOW" buttons.
         * @param {string} jobTitle - The title of the job.
         * @param {string} companyName - The name of the company.
         */
        function applyNow(jobTitle, companyName) {
            openModal(
                `Applying for ${jobTitle}`,
                `Your application for the ${jobTitle} position at ${companyName} has been received in this demo. A full site would redirect you to the application form.`
            );
        }

        // --- Navigation Dropdown Functions ---

        /**
         * Toggles the visibility of a navigation dropdown.
         * @param {string} dropdownId - The data-dropdown-id of the dropdown container.
         */
        function toggleDropdown(dropdownId) {
            const dropdown = document.querySelector(`[data-dropdown-id="${dropdownId}"]`);
            dropdown.classList.toggle('open');
        }

        // Close dropdowns when clicking outside
        document.addEventListener('click', function (event) {
            document.querySelectorAll('.dropdown').forEach(dropdown => {
                // If the click is outside the current dropdown
                if (!dropdown.contains(event.target)) {
                    dropdown.classList.remove('open');
                }
            });
        });

        // --- Event Listeners for Main Buttons ---

        document.getElementById('post-job-button').addEventListener('click', function (e) {
            e.preventDefault();
            openModal(
                'Post a Job',
                'This button would take you to the employer registration/login page for posting a job. Thank you for using Jobbe!'
            );
        });

        document.getElementById('action-modal').addEventListener('click', function (e) {
            // Closes modal if user clicks on the backdrop (not the modal content)
            if (e.target === actionModal) {
                closeModal();
            }
        });