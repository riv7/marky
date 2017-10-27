var React = require('react');

import { Table } from 'react-bootstrap';
import TableHeader from './subcomponents/tableheader';
import CategoriesRow from './subcomponents/categoriesrow';
import AverageRow from './subcomponents/averagerow';
import StudentRows from './subcomponents/studentrow';
import AddButton from './subcomponents/addbutton';

class StudentTable extends React.Component {

    componentDidMount() {
        const {fetchData} = this.props;
        fetchData("/api/years/20162017");
    }

    render() {
        const {marksTableViewModel, loadingState, testSelected, testRemoved, history} = this.props;

        if (loadingState.hasErrored) {
            return (
                <div>
                    <p>Sorry! There was an error loading the items</p>
                </div>
            );
        }

        if (loadingState.isLoading) {
            return (
                <div>
                    <p>Loading…</p>
                </div>
            );
        }

        return (
            <div>
                <Table striped condensed hover>
                    <TableHeader marksTableViewModel={marksTableViewModel}/>
                    <CategoriesRow
                        marksTableViewModel={marksTableViewModel}
                        testSelected={testSelected}
                        testRemoved={testRemoved}
                        history={history}/>
                    <StudentRows marksTableViewModel={marksTableViewModel}/>
                    <AverageRow marksTableViewModel={marksTableViewModel}/>
                </Table>
                <AddButton
                    testSelected={testSelected}
                    history={history}/>
            </div>
        );
    }
}

export default StudentTable;
