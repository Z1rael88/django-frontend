import { Link } from "react-router-dom";
import AdministratorSideBar from "./AdministratorSideBar";
import { useState,useEffect } from "react";
import axios from "axios";
const baseUrl ='http://127.0.0.1:8000/api';
function AddFilm(){
    const [categories,setCategories] = useState([]);
    const [filmData,setFilmData] = useState({
        category:'',
        title:'',
        description:'',
        image:''
    });
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                setCategories(res.data);
            });
        }catch(error){
            console.log(error);
        }
    },[]);
    const handleChange=(event)=>{
        setFilmData({
            ...filmData,
            [event.target.name]:event.target.value
        });
    };
    const fileChange=(event)=>{
        setFilmData({
            ...filmData,
            [event.target.name]:event.target.files[0]
        });
    }
    const formSubmit=()=>{
        const _fromData = new FormData();
        _fromData.append('category',filmData.category);
        _fromData.append('administrator',1);
        _fromData.append('title',filmData.title);
        _fromData.append('description',filmData.description);
        _fromData.append('image',filmData.image,filmData.image.name);
        try{
            axios.post(baseUrl+'/film/',_fromData,{
                headers:{
                    'content-type':'multipart/form-data'
                }
            })
            .then((res)=>{
                console.log(res.data)
            })
        }
        catch(error){console.log("Error uploading film",error)}
    }
    return (
        <div className="container mt-4">
                <div className="row">
                    <aside className="col-md-3">
                        <AdministratorSideBar/>
                    </aside>
                    <section className="col-md-9">
                        <div className="card">
                            <h5 className="card-header">Dodawanie filmu</h5>
                            <div className="card-body">
                                <form>
                                    <div className="mb-3">
                                        <label htmlFor="category" className="form-label">Kategoria</label>
                                        <select name="category" onChange={handleChange} defaultValue={filmData.category} className="form-control">
                                            {categories.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                        </select>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="title" className="form-label">Tytul</label>
                                        <input type="text" name="title" onChange={handleChange} defaultValue={filmData.title} id="title" className="form-control"/>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="description" className="form-label">Opis</label>
                                        <textarea name="description" onChange={handleChange} defaultValue={filmData.description} id="description" className="form-control"></textarea>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="image" className="form-label">Film</label>
                                        <input type="file" name="image" accept="video/mp4" onChange={handleChange} defaultValue={filmData.image} id="image" className="form-control"/>
                                    </div>
                                    <button type="submit" onClick={formSubmit} className="btn btn-primary">Upload</button>
                                </form>
                            </div>
                        </div>
                    </section>
                </div>
        </div>
    )
}
export default AddFilm;