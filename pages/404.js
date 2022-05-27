import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div>
      <h1>Page Cannot Be Found</h1>
      <Link href="/">Back to Homepage</Link>
    </div>
  );
};

export default NotFound;
