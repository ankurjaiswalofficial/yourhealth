import React from "react";

export default function SolutionCard() {
    return (
        <div class="solution_card">
            <div class="icon">
                <img
                    data-src="https://redhealth.gumlet.io/build/images/ambulatory-clinic.svg"
                    alt="Ambulatory"
                    src="https://redhealth.gumlet.io/build/images/ambulatory-clinic.svg?w=70&amp;dpr=1.3"
                    class="gm-loaded gm-observing gm-observing-cb"
                />
            </div>
            <h3>
                RED Priority<span>Clinic</span>
            </h3>
            <p>
                Red Priority Clinic offers comprehensive healthcare services
                including consultation, preventive health checks, and medicine
                delivery. Our team of medical professionals and integrated
                facilities provide top-quality care to patients of all ages.
            </p>
            <a
                href="https://www.red.health/solutions/red-priority-clinic"
                class="button_variation_2"
            >
                Explore More
            </a>
        </div>
    );
}
