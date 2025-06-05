import Container from "./shared/Container";

function WhyUs() {
  return (
    <Container className="py-12">
      <div>
        <h1 className="text-2xl font-space font-bold text-center pb-6 text-text">
          Why Clients Trust Us
        </h1>

        <div className="grid grid-cols-3 gap-2 auto-rows-fr">
          {/* Transparent Pricing */}
          <div
            className="relative col-span-2 rounded-md overflow-hidden bg-cover bg-center"
            style={{
              backgroundImage: "url(/src/assets/images/home/pricing.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold font-space mb-2 text-center">
                Transparent Pricing
              </h3>
              <p className="text-base opacity-90 text-center">
                What we quote is what you pay — no surprises.
              </p>
            </div>
          </div>

          {/* We Haul Old Stuff */}
          <div
            className="bg-background text-text border border-text/33 p-4 rounded-md 
                         col-span-1 flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-bold font-space mb-2">
              We Haul Old Stuff
            </h3>
            <p className="text-base opacity-80">
              Furniture, mattresses, appliances — out of your way.
            </p>
          </div>

          {/* Local & Trusted */}
          <div
            className="bg-background text-text border border-text/33 p-4 rounded-md 
                       col-span-1 flex flex-col justify-between h-full"
          >
            <h3 className="text-xl font-bold font-space mb-2">
              Local & Trusted
            </h3>
            <p className="text-base opacity-80">
              We’re a local team that knows the Lower Mainland — and our reviews
              prove it.
            </p>
          </div>

          {/* Expert Technicians */}
          <div
            className="relative col-span-2 rounded-md overflow-hidden bg-cover bg-center shadow-md"
            style={{
              backgroundImage: "url(/src/assets/images/home/moving-crew.jpg)",
            }}
          >
            <div className="absolute inset-0 bg-black/30 z-0" />
            <div className="relative z-10 p-4 text-white flex flex-col justify-between h-full">
              <h3 className="text-xl font-bold font-space mb-2 text-center">
                Expert Technicians
              </h3>
              <p className="text-base opacity-90 text-center">
                Certified, vetted, and experienced — we work with all major
                brands.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WhyUs;
