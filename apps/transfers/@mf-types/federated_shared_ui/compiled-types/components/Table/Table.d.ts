import "./Table.scss";
type TableProps = {
    id?: string;
    headers: string[];
    data: any[];
    striped?: boolean;
    bordered?: boolean;
    hover?: boolean;
};
declare const Table: (props: TableProps) => import("react/jsx-runtime").JSX.Element;
export default Table;
