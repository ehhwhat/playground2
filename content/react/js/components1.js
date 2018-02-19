
// EXAMPLE 1
class BookShelf extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col ">
                        <h3>Static</h3>
                        <p>In this example all data is hardcoded. <span className="text-danger">To add a different book i would need to create a new REACT component for each one.</span></p>
                        <hr className="invisible" />
                    </div>
                </div>
                <div className="row">
                    <Book />
                    <Book />
                    <div className="col-sm-12 text-center">
                        <hr className="invisible" />
                        <ul className="list-inline">
                            <li className="list-inline-item"><strong>Component/s:</strong> <code>BookShelf</code>, <code>Book</code></li>
                            <li className="list-inline-item"><strong>Data:</strong> Hardcoded and static</li>
                            <li className="list-inline-item"><strong>Methods:</strong> </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

}

class Book extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-6 col-md-4 col-lg-2">
                <div className="card mb-3">
                    <img className="card-img-top" src="https://www4.alibris-static.com/1984/isbn/9781328869333_l.jpg" />
                    <div className="card-body">
                        <p className="card-title">1984</p>
                        <hr className="invisible"/>
                        <p>Best book ever.</p>
                        <p><small>George Orwell | 5</small></p>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render (
    <BookShelf />, document.getElementById('book-shelf-1')
);
