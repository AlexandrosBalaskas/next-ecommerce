import Link from "next/link";

const OrderPage = async ({ params }: { params: { id: string } }) => {
  const id = params.id;

  return (
    <div className="flex flex-col h-[calc(100vh-180px)] items-center justify-center ">
      <div className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] px-40 py-20">
        <h1 className="text-xl">Order Details</h1>
        <div className="mt-12 flex flex-col gap-6">
          <div className="">
            <span className="font-medium">Order Id: </span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Name: </span>
          </div>
          <div className="">
            <span className="font-medium">Receiver Email: </span>
          </div>
          <div className="">
            <span className="font-medium">Price: </span>
          </div>
          <div className="">
            <span className="font-medium">Payment Status: </span>
          </div>
          <div className="">
            <span className="font-medium">Order Status: </span>
          </div>
          <div className="">
            <span className="font-medium">Delivery Address: </span>
          </div>
        </div>
      </div>
      <Link href="/" className="underline mt-6">
        Have a problem? Contact us
      </Link>
    </div>
  );
};

export default OrderPage;
