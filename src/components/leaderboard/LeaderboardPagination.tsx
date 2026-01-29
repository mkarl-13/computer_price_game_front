import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
export const LeaderboardPagination = ({
  setPage,
  page,
  totalPages,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  page: number;
  totalPages: number;
}) => {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            className={
              page > 1
                ? ""
                : "text-muted hover:bg-transparent! hover:text-muted!"
            }
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              if (page > 1) {
                setPage((prev) => prev - 1);
              }
            }}
            className={
              page > 1
                ? ""
                : "text-muted hover:bg-transparent! hover:text-muted!"
            }
          >
            {page - 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink isActive>{page}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              if (page < totalPages) {
                setPage((prev) => prev + 1);
              }
            }}
            className={
              page < totalPages
                ? ""
                : "text-muted hover:bg-transparent! hover:text-muted!"
            }
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {page + 1 < totalPages ? <PaginationEllipsis /> : null}
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            onClick={() => {
              if (page < totalPages) {
                setPage((prev) => prev + 1);
              }
            }}
            className={
              page < totalPages
                ? ""
                : "text-muted hover:bg-transparent! hover:text-muted!"
            }
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
