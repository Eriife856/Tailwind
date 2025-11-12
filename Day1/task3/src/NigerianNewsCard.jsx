function NigeriaNewsCard() {
    return (
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="relative">
                <img
                    src="https://www.worldpoliticsreview.com/wp-content/uploads/2025/06/nigeria-tinubu-opposition-politics-06182025-2-850x478.jpg"
                    alt="news"
                    className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full uppercase">
                    Politics
                </span>
            </div>
            <div className="p-5">
                <h2 className="text-lg font-semibold mb-2 text-gray-800">
                    Nigerian Government Announces New Economic Reforms
                </h2>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    The federal government has unveiled new policies aimed at boosting local manufacturing and attracting foreign investment. Analysts predict positive outcomes in the coming quarters.
                </p>
                <div className="flex items-center justify-between text-gray-500 text-xs mb-3">
                    <span>By Itunu Bisayo</span>
                    <span>Nov 11, 2025 • 4 min read</span>
                </div>
                <a href="#" className="text-green-600 text-sm font-semibold hover:underline">
                    Read more →
                </a>
            </div>
        </div>
);
}

export default NigeriaNewsCard;