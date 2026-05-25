import {
    DataGrid,
    Column,
    Paging,
    Pager,
    SearchPanel,
    HeaderFilter,
    ColumnChooser,
    Toolbar,
    Item,
    GroupPanel,
    Grouping,
    Editing,
} from "devextreme-react/data-grid";
import useTerritories from "../api/get-territories";
import { useNavigate } from "react-router-dom";

export default function FullViewGrid() {

    const navigate = useNavigate()
    const { data, isLoading } = useTerritories();

    if (isLoading) return <div>Loading...</div>;

    return (
        <div style={{ padding: "20px" }}>
            <h2 style={{ marginBottom: "12px" }}>Territories</h2>
            <DataGrid
                dataSource={data}
                showBorders={true}
                rowAlternationEnabled={true}
                columnAutoWidth={true}
                height={500}
            >
                <GroupPanel visible={true} />
                <Grouping autoExpandAll={false} />

                <SearchPanel visible={true} placeholder="Search..." />
                <HeaderFilter visible={true} />
                <ColumnChooser enabled={true} />
                <Editing
                    mode="popup"
                    allowUpdating={true}
                    allowDeleting={true}
                />

                <Toolbar>
                    <Item location="before">
                        <button onClick={() => navigate('/add')}>+ Add New</button>
                    </Item>
                    <Item name="groupPanel" />
                    <Item name="searchPanel" />
                    <Item name="columnChooserButton" />
                </Toolbar>
                <Column dataField="code" caption="Code" width={100} alignment="center" groupIndex={0} />
                <Column dataField="id" caption="ID" width={70} alignment="center" />
                <Column dataField="name" caption="Name" />
                <Column dataField="code" caption="Code" width={100} alignment="center" />
                <Column dataField="createdAt" caption="Created At" dataType="date" width={160} alignment="center" />

                <Paging defaultPageSize={10} />
                <Pager
                    visible={true}
                    showPageSizeSelector={true}
                    allowedPageSizes={[5, 10, 20]}
                    showInfo={true}
                    showNavigationButtons={true}
                    infoText="{0}-{1} of {2}"
                />
            </DataGrid>
        </div>
    );
}