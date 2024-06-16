const BenefitsBar = () => {
    return (
        <>
            <section className="flex flex-col items-center justify-center gap-10 px-4 md:flex-row flex-wrap bg-divisorLightBeige h-auto md:justify-around py-24">
                <div className="flex flex-row gap-4">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/trophy.svg" alt="Trophy Icon" />
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-2xl">High Quality</h3>
                        <p className="text-caption font-medium">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/guarantee.svg" alt="Guarantee Icon" />
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-2xl">Warranty Protection</h3>
                        <p className="text-caption font-medium">Over 2 years</p>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/shipping.svg" alt="Free Shipping Icon" />
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-2xl">Free Shipping</h3>
                        <p className="text-caption font-medium">crafted from top materials</p>
                    </div>
                </div>

                <div className="flex flex-row gap-4">
                    <img src="https://final-challenge-compass.s3.us-east-2.amazonaws.com/icons/customer-support.svg" alt="Customer Support Icon" />
                    <div className="flex flex-col gap-2">
                        <h3 className="font-semibold text-2xl">24 / 7 Support</h3>
                        <p className="text-caption font-medium">Dedicated support</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BenefitsBar