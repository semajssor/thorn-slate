import "./DirectoryItem.scss";
import { Link } from "react-router-dom";

const DirectoryItem = ({ category }) => {
	const { title, imageUrl } = category;
	return (
		<Link to={`/shop/${title.toLowerCase()}`} className="directory-item-container">
			<div className="background-image" style={{ backgroundImage: `url(${imageUrl})` }} />
			<div className="body">
				<h2>{title}</h2>
				<p>Shop now</p>
			</div>
		</Link>
	);
};

export default DirectoryItem;
