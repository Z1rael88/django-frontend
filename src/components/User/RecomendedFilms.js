import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
function RecomendedFilms(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <Sidebar/>
                </aside>
                <section className="col-md-9">
                    <div className="card">
                        <h5 className="card-header">Polecane filmy</h5>
                        <div className="card-body">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>Nazwa</th>
                                        <th>Autor</th>
                                        <th>Kategoria</th>
                                        <th>Akcja</th>
                                    </tr>
                                </thead>
                                <tbody>
                                <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td><button className="btn btn-danger btn-sm active">Usuń</button></td>
                                    </tr>
                                   
                                    <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td><button className="btn btn-danger btn-sm active">Usuń</button></td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td>Władca Pierścieni</td>
                                        <td><button className="btn btn-danger btn-sm active">Usuń</button></td>
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
export default RecomendedFilms;