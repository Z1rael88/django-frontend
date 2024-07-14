import AdministratorSideBar from "./AdministratorSideBar";

function AdministratorFilms(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <AdministratorSideBar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Filmy Adminy</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nazwa</th>
                                        <th>Autor</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Nazwa filmu</td>
                                        <td>Admin</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm active">Usuń</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default AdministratorFilms;