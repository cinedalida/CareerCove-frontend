const Feedbacks = () => {
  return (
    <section
      id="feedbacks"
      className="py-20 bg-[var(--color-bg-secondary)] text-center px-6"
    >
      <h2 className="section-title text-[var(--color-text-primary)] mb-10">
        What Our Users Say
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* Feedback Card 1 */}
        <div className="bg-[var(--color-bg-primary)] shadow rounded-2xl p-8">
          <p className="section-subtext mb-4">
            “Lauviah completely changed how I approach my mornings. It feels
            intentional now.”
          </p>
          <h4 className="font-semibold text-[var(--color-text-primary)]">
            — Alex M.
          </h4>
        </div>

        {/* Feedback Card 2 */}
        <div className="bg-[var(--color-bg-primary)] shadow rounded-2xl p-8">
          <p className="section-subtext mb-4">
            “The wellness breaks help me manage burnout. Beautiful and simple
            interface.”
          </p>
          <h4 className="font-semibold text-[var(--color-text-primary)]">
            — Jamie L.
          </h4>
        </div>

        {/* Feedback Card 3 */}
        <div className="bg-[var(--color-bg-primary)] shadow rounded-2xl p-8">
          <p className="section-subtext mb-4">
            “It’s not just a productivity app — it’s a lifestyle shift.”
          </p>
          <h4 className="font-semibold text-[var(--color-text-primary)]">
            — Taylor R.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default Feedbacks;
