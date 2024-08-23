"use client"
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Mentors = () => {
  const router = useRouter();
  const [id, setShippingId] = useState<string | string[] | undefined>();

  useEffect(() => {
    if (router.isReady) {
      const { id } = router.query;
      setShippingId(id);
    }
  }, [router.isReady, router.query]);

  if (!id) {
    return <div>Loading...</div>;
  }
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">
        Shipping Details for ID: {id}
      </h1>
      {/* Display more details here based on the ID */}
      <p>Details about the selected shipping item would go here.</p>
    </div>
  );
};

export default Mentors;
