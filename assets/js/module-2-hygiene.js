(function () {
    const STORAGE_KEY = "mc_module2_progress";
    const REFLECTION_KEY = "mc_module2_reflection";

    const steps = [
        "disease",
        "hygiene",
        "endangerment",
        "contra-quiz",
        "reflection"
    ];

    function loadProgress() {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || { completedSteps: [] };
        } catch (e) {
            return { completedSteps: [] };
        }
    }

    function saveProgress(progress) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    }

    function markStepComplete(stepId) {
        const progress = loadProgress();
        if (!progress.completedSteps.includes(stepId)) {
            progress.completedSteps.push(stepId);
            saveProgress(progress);
            updateProgressUI(progress);
        }
    }

    function updateProgressUI(progress) {
        const fill = document.getElementById("moduleProgressFill");
        const text = document.getElementById("moduleProgressText");

        const total = steps.length;
        const completed = progress.completedSteps.length;
        const percent = Math.round((completed / total) * 100);

        if (fill) fill.style.width = percent + "%";
        if (text) text.textContent = percent + " percent complete";
    }


    /* Accordion */
    function setupAccordion() {
        const acc = document.querySelector(".mc-accordion");
        if (!acc) return;

        const buttons = acc.querySelectorAll(".mc-accordion-item");

        buttons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const panel = btn.nextElementSibling;
                const icon = btn.querySelector(".mc-accordion-icon");
                const isOpen = panel.style.display === "block";

                acc.querySelectorAll(".mc-accordion-panel").forEach((p) => p.style.display = "none");
                acc.querySelectorAll(".mc-accordion-icon").forEach((i) => i.textContent = "+");

                if (!isOpen) {
                    panel.style.display = "block";
                    icon.textContent = "−";
                }

                markStepComplete("disease");
            });
        });
    }


    /* Flip cards */
    function setupFlipCards() {
        const grid = document.querySelector(".mc-flip-grid");
        if (!grid) return;

        const cards = grid.querySelectorAll(".mc-flipcard");

        cards.forEach((card) => {
            card.addEventListener("click", () => {
                card.classList.toggle("is-flipped");
                markStepComplete("hygiene");
            });
        });
    }


    /* Endangerment sites */
    function setupEndangerment() {
        const spots = document.querySelectorAll(".mc-endangerment-spot");
        const output = document.getElementById("endangermentInfo");

        if (!output) return;

        spots.forEach((spot) => {
            spot.addEventListener("click", () => {
                const text = spot.getAttribute("data-info");
                output.textContent = text;
                markStepComplete("endangerment");
            });
        });
    }


    /* Contraindication quiz */
    function setupContraQuiz() {
        const form = document.getElementById("contraQuizForm");
        const feedback = document.getElementById("contraQuizFeedback");

        if (!form || !feedback) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const choice = new FormData(form).get("contraChoice");

            if (!choice) {
                feedback.textContent = "Choose an answer before checking.";
                return;
            }

            if (choice === "B") {
                feedback.textContent = "Correct. Fever means massage is contraindicated until the client is recovered.";
            } else {
                feedback.textContent = "Not quite. Fever indicates systemic infection and requires postponing the appointment.";
            }

            markStepComplete("contra-quiz");
        });
    }


    /* Reflection */
    function setupReflection() {
        const textarea = document.getElementById("reflectionInput");
        const button = document.getElementById("saveReflectionButton");
        const status = document.getElementById("reflectionStatus");

        try {
            const saved = localStorage.getItem(REFLECTION_KEY);
            if (saved) textarea.value = saved;
        } catch (e) {}

        if (!textarea || !button) return;

        button.addEventListener("click", () => {
            localStorage.setItem(REFLECTION_KEY, textarea.value || "");
            status.textContent = "Saved on this device.";
            setTimeout(() => status.textContent = "", 3000);

            markStepComplete("reflection");
        });
    }


    /* Module complete button */
    function setupModuleComplete() {
        const btn = document.getElementById("completeModuleButton");
        if (!btn) return;

        btn.addEventListener("click", () => {
            steps.forEach(markStepComplete);
        });
    }



    /* Initialize */
    document.addEventListener("DOMContentLoaded", () => {
        const progress = loadProgress();
        updateProgressUI(progress);

        setupAccordion();
        setupFlipCards();
        setupEndangerment();
        setupContraQuiz();
        setupReflection();
        setupModuleComplete();
    });
})();
