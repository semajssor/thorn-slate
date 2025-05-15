import "./Categories.styles.scss";

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
			"https://plus.unsplash.com/premium_photo-1723802552767-859b25edbd71?q=80&w=1148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		
	},
];

const Categories = () => {
	return (
		<div className="categories-container">
			{categories.map(({ title, imageUrl, id }) => (
				<div key={id} className="category-container">
					<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
					<div className="category-body-container">
						<h2>{title}</h2>
						<p>Shop now</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Categories;
