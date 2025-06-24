import Directory from "../../components/directory/Directory";

const Home = () => {
	const categories = [
		{
			id: 1,
			title: "Hats",
			imageUrl:
				"https://images.unsplash.com/photo-1704253801130-4ce99cd0447c?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 2,
			title: "Jackets",
			imageUrl:
				"https://images.unsplash.com/photo-1675537057530-312348c6caa2?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 3,
			title: "Sneakers",
			imageUrl:
				"https://plus.unsplash.com/premium_photo-1665413642308-c5c1ed052d12?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 4,
			title: "Women",
			imageUrl:
				"https://plus.unsplash.com/premium_photo-1664202526828-6f18286508d2?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		},
		{
			id: 5,
			title: "Men",
			imageUrl:
				"https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fG1lbnMlMjBjbG90aGluZ3xlbnwwfHwwfHx8MA%3D%3D",
		},
	];
	return <Directory categories={categories} />;
};

export default Home;



