const NeedHelp = () => {
    return (
        <>
        Contact us at < a href = 'mailto:support@foodparty.com'  className = 'text-decoration-none' > support@foodparty.com</a > or call us at < a href = 'tel:123-456-7890' className = 'text-decoration-none' > 123 - 456 - 7890</a >.
        </>
    );
}

export const CarousalData = [
    {
        objective: "Who We Are",
        p: "Welcome to Food Party, your ultimate destination for quick and reliable food delivery. We connect food lovers with their favorite local restaurants, offering a wide range of cuisines to satisfy every craving."
    },
    {
        objective: "Our Mission",
        p: "Our mission is simple to bring the best flavors of your city to your doorstep while ensuring fast delivery, quality service, and customer satisfaction"
    },
    {
        objective: "Our Story",
        p: "Founded in 2022 by a group of food lover enthusiasts, Foodparty began as a small project to simplify food ordering. Today, we are proud to serve thousands of customers daily, delivering not just meals but joy and convenience."
    },
    {
        objective: "Need Help?",
        p:<NeedHelp/>
    }
]