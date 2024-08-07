import { BRAND } from "@/types/brand";
import Image from "next/image";

const brandData: BRAND[] = [
  {
    logo: "/images/user/Anil_New_Image.jpeg",
    name: "Wade Warren",
    visitors: 15478256,
    revenues: "$124.00",
    status: "Delivered",
  },
  {
    logo: "/images/user/Anil.jpg",
    name: "Jane Cooper",
    visitors: 48965786,
    revenues: "$365.02",
    status: "Delivered",
  },
  {
    logo: "/images/user/aksk.png",
    name: "Guy Hawkins",
    visitors: 78958215,
    revenues: "$45.88",
    status: "Cancelled",
  },
  {
    logo: "/images/user/Anil_New_Image.jpeg",
    name: "Kristin Watson",
    visitors: 20965732,
    revenues: "$65.00",
    status: "Pending",
  },
  {
    logo: "/images/user/Anil_New_Image.jpeg",
    name: "Cody Fisher",
    visitors: 95715620,
    revenues: "$545.00",
    status: "Delivered",
  },
  {
    logo: "/images/user/Anil_New_Image.jpeg",
    name: "Savannah",
    visitors: 78514568,
    revenues: "$128.20",
    status: "Delivered",
  },
];

const TableOne = () => {
  return (
    <>
      <div className="rounded shadow-1 dark:bg-gray-dark dark:shadow-card text-white text-xs ml-6">
        <h4 className="mb-5.5 text-body-2xlg font-bold text-dark dark:text-white text-lg">
          Recent Orders
        </h4>

        <div className="flex flex-col mt-6">
          <div className="grid grid-cols-4 sm:grid-cols-4">
            <div className="px-2 pb-3.5">
              <h5 className="text-sm font-sm xsm:text-base">Customer</h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-sm xsm:text-base">Order No.</h5>
            </div>
            <div className="px-2 pb-3.5 text-center">
              <h5 className="text-sm font-sm xsm:text-base">Amount</h5>
            </div>
            <div className="hidden px-2 pb-3.5 text-center sm:block">
              <h5 className="text-sm font-sm xsm:text-base">Status</h5>
            </div>
          </div>

          {brandData.map((brand, key) => (
            <div
              className={`grid grid-cols-4 sm:grid-cols-4 ${
                key === brandData.length - 1
                  ? ""
                  : "border-b border-stroke dark:border-dark-3"
              }`}
              key={key}
            >
              <div className="flex items-center gap-3.5 p-2">
                <div className="flex-shrink-0">
                  <Image
                    src={brand.logo}
                    alt="Brand"
                    width={12}
                    height={6}
                    className="rounded-full"
                  />
                </div>
                <p className="hidden font-medium text-dark dark:text-white sm:block">
                  {brand.name}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-0">
                <p className="font-medium text-dark dark:text-white">
                  {brand.visitors}
                </p>
              </div>

              <div className="flex items-center justify-center px-2 py-0">
                <p className="font-medium text-green-light-1">
                  ${brand.revenues}
                </p>
              </div>

              <div className="hidden items-center justify-center px-2 py-0 sm:flex">
                <div className="font-medium text-dark dark:text-white">
                  <div
                    className={
                      ["Cancelled", "Pending"]?.includes(brand.status)
                        ? "text-red-700 bg-red-100 p-1 rounded"
                        : "text-green-700 bg-green-100 p-1 rounded"
                    }
                  >
                    {brand.status}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TableOne;
