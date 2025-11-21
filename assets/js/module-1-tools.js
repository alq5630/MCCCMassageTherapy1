(function () {
    const STORAGE_KEY = "mc_module1_progress";
    const REFLECTION_KEY = "mc_module1_reflection";

    const steps = ["overview", "tools", "mechanics-quiz", "reflection"];

    function loadProgress() {
        try {
            const raw = localStorage.getItem(STORAGE_KEY);
            if (!raw) return { completedSteps: [] };
            return JSON.parse(raw);
        } catch (e) {
            return { completedSteps: [] };
        }
    }

    function saveProgress(progress) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
        } catch (e) {
            // ignore
        }
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
        const total = steps.length;
        const completed = progress.completedSteps.length;
        const percent = Math.round((completed / total) * 100);

        const fill = document.getElementById("moduleProgressFill");
        const text = document.getElementById("moduleProgressText");

        if (fill) {
            fill.style.width = percent + "%";
        }
        if (text) {
            text.textContent = percent + " percent complete";
        }
    }

    function setupAccordion() {
        const container = document.querySelector(".mc-accordion");
        if (!container) return;

        const items = container.querySelectorAll(".mc-accordion-item");

        items.forEach((btn) => {
            btn.addEventListener("click", () => {
                const panel = btn.nextElementSibling;
                const icon = btn.querySelector(".mc-accordion-icon");
                const isOpen = panel.style.display === "block";

                // close all
                container
                    .querySelectorAll(".mc-accordion-panel")
                    .forEach((p) => (p.style.display = "none"));
                container
                    .querySelectorAll(".mc-accordion-icon")
                    .forEach((i) => (i.textContent = "+"));

                if (!isOpen) {
                    panel.style.display = "block";
                    if (icon) icon.textContent = "−";
                }

                const stepId = container.getAttribute("data-track-step");
                if (stepId) markStepComplete(stepId);
            });
        });
    }

    function setupFlipCards() {
        const grid = document.querySelector(".mc-flip-grid");
        if (!grid) return;

        const cards = grid.querySelectorAll(".mc-flipcard");
        cards.forEach((card) => {
            card.addEventListener("click", () => {
                card.classList.toggle("is-flipped");
                const stepId = grid.getAttribute("data-track-step");
                if (stepId) markStepComplete(stepId);
            });
        });
    }

    function setupMechanicsQuiz() {
        const form = document.getElementById("mechanicsQuizForm");
        const feedback = document.getElementById("mechanicsQuizFeedback");
        if (!form || !feedback) return;

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const data = new FormData(form);
            const choice = data.get("mechanicsChoice");

            if (!choice) {
                feedback.textContent = "Choose an answer before checking.";
                return;
            }

            if (choice === "B") {
                feedback.textContent =
                    "Yes. A lower table with soft knees and a hip hinge lets you use your body weight instead of your low back.";
            } else {
                feedback.textContent =
                    "Not quite. Think about how to let your legs and body weight do the work instead of your low back and shoulders.";
            }

            const stepContainer = form.closest("[data-track-step]");
            if (stepContainer) {
                const stepId = stepContainer.getAttribute("data-track-step");
                if (stepId) markStepComplete(stepId);
            }
        });
    }

    function setupReflection() {
        const textarea = document.getElementById("reflectionInput");
        const button = document.getElementById("saveReflectionButton");
        const status = document.getElementById("reflectionStatus");

        if (!textarea || !button || !status) return;

        try {
            const saved = localStorage.getItem(REFLECTION_KEY);
            if (saved) {
                textarea.value = saved;
            }
        } catch (e) {
            // ignore
        }

        button.addEventListener("click", () => {
            try {
                localStorage.setItem(REFLECTION_KEY, textarea.value || "");
                status.textContent = "Saved on this device.";
                setTimeout(() => {
                    status.textContent = "";
                }, 3000);
            } catch (e) {
                status.textContent = "Unable to save here, but you can copy your notes.";
            }

            const wrapper = button.closest("[data-track-step]");
            if (wrapper) {
                const stepId = wrapper.getAttribute("data-track-step");
                if (stepId) markStepComplete(stepId);
            }
        });
    }

    function setupModuleCompleteButton() {
        const button = document.querySelector(".mc-section-last .mc-button-primary");
        if (!button) return;
        button.addEventListener("click", () => {
            steps.forEach(markStepComplete);
        });
    }

    document.addEventListener("DOMContentLoaded", () => {
        const progress = loadProgress();
        updateProgressUI(progress);
        setupAccordion();
        setupFlipCards();
        setupMechanicsQuiz();
        setupReflection();
        setupModuleCompleteButton();
    });
})();
