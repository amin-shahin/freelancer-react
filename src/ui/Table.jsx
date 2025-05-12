function Table({ children }) {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table  className="shadow-md">
        {children}
      </table>
    </div>
  );
}

export default Table;

export function TableHeader({ children }) {
  return (
    <thead>
      <tr className="title-row">{children}</tr>
    </thead>
  );
}

export function TableBody({ children }) {
  return <tbody>{children}</tbody>;
}

export function TableRow({ children }) {
  return <tr>{children}</tr>;
}

Table.Header = TableHeader;
Table.Body = TableBody;
Table.Row = TableRow;