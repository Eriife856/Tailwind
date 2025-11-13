import React from "react";
import ecce from "./assets/ecce.jpg"

const BlogPost = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
    
      <div className="w-full h-64 md:h-150 mb-8 overflow-hidden rounded-lg">
        <img
          src={ecce}
          alt="Early Childhood Education"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          The Power of Early Childhood Education: Building Strong Foundations
        </h1>
        <p className="text-gray-500 text-sm">
          By{" "}
          <span className="font-medium text-[#008751]">Ojo Fopefoluwa</span> •
          November 13, 2025 • 6 min read
        </p>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <article className="md:col-span-2 text-gray-700 leading-relaxed space-y-6">
          <p>
            Early childhood education plays a critical role in shaping the
            intellectual, emotional, and social development of young children.
            The years between birth and age six are the most formative, setting
            the stage for lifelong learning, behavior, and overall well-being.
          </p>

          <p>
            During these early years, children develop essential skills such as
            language, problem-solving, emotional regulation, and social
            interaction. A well-structured early education program helps nurture
            curiosity, creativity, and confidence —qualities that serve as the
            foundation for success in later academic and personal pursuits.
          </p>

          <p>
            In Nigeria and across Africa, the importance of investing in early
            childhood education cannot be overstated. Research shows that
            children who receive quality early education are more likely to stay
            in school, perform better academically, and become more productive
            adults. It is not just an educational issue it’s a national
            development priority.
          </p>

          <p>
            As educators, parents, and policymakers, our collective
            responsibility is to ensure that every child, regardless of
            background, has access to nurturing and inclusive learning
            environments. Early childhood education is more than teaching ABCs 
            it’s about building the emotional and cognitive foundation for a
            brighter, more equitable future.
          </p>
        </article>

        {/* Sidebar */}
        <aside className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 border-b border-gray-200 pb-2">
            Related Posts
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="#"
                className="text-[#008751] hover:underline font-medium"
              >
                How Play-Based Learning Shapes Young Minds
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#008751] hover:underline font-medium"
              >
                The Role of Teachers in Early Development
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-[#008751] hover:underline font-medium"
              >
                Creating Safe and Inclusive Learning Spaces
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
};

export default BlogPost;
