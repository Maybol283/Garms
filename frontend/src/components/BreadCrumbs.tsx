import { Link, useParams } from "react-router-dom";

interface BreadcrumbProps {
  margin?: string;
}

const Breadcrumbs: React.FC<BreadcrumbProps> = ({ margin }) => {
  const { category, item } = useParams();

  return (
    <div className={`border-b border-gray-200 ${margin}`}>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <ol role="list" className="flex items-center  space-x-4 py-4">
          <li>
            <div className="flex items-center">
              <Link
                to="/Shop"
                className="mr-4 text-sm font-medium text-gray-900"
              >
                Shop
              </Link>
              <svg
                viewBox="0 0 6 20"
                aria-hidden="true"
                className="h-5 w-auto text-gray-300"
              >
                <path
                  d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </li>
          {category && (
            <li>
              <div className="flex items-center">
                <Link
                  to={`/Shop/${category}`}
                  className="mr-4 text-sm font-medium text-gray-900"
                >
                  {category}
                </Link>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
          )}
          {item && (
            <li>
              <div className="flex items-center">
                <Link
                  to={`/Shop/${category}/${item}`}
                  className="mr-4 text-sm font-medium text-gray-900"
                >
                  {item}
                </Link>
                <svg
                  viewBox="0 0 6 20"
                  aria-hidden="true"
                  className="h-5 w-auto text-gray-300"
                >
                  <path
                    d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </li>
          )}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
