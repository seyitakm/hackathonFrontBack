import { Pagination } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../contexts/SpecialtiesContextProvider";
import SpecialtiesCard from "./SpecialtiesCard";

const SpecialtiesList = () => {
  const { getSpecs, specs, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getSpecs();
  }, []);

  // console.log(products);

  useEffect(() => {
    getSpecs();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  return (
    <div>
      <Box>
        {specs.map((item) => (
          <SpecialtiesCard key={item.id} item={item} />
        ))}
      </Box>

      <Box>
        <Pagination
          count={pages}
          variant="outlined"
          color="primary"
          onChange={(e, page) => setCurrentPage(page)}
          page={currentPage}
        />
      </Box>
    </div>
  );
};

export default SpecialtiesList;
