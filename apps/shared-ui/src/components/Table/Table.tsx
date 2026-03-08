import "./Table.css";

type TableProps = {
  id?: string;
  headers: string[];
  data: any[];
  striped?: boolean;
  bordered?: boolean;
  hover?: boolean;
};

const Table = (props: TableProps) => {
  const {
    id,
    headers = [],
    data = [],
    striped = true,
    bordered = false,
    hover = true,
  } = props;

  const tableClasses = `
    table
    ${striped ? "table-striped" : ""}
    ${bordered ? "table-bordered" : ""}
    ${hover ? "table-hover" : ""}
  `;

  return (
    <>
      <table id={id} className={tableClasses.trim()} {...props}>
        <thead>
          <tr>
            {headers.map((header: string, index: number) => (
              <th key={index} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row: any, rowIndex: number) => (
            <tr key={rowIndex}>
              {headers.map((header: string, colIndex: number) => (
                <td key={colIndex}>{row[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;