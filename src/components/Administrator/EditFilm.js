import { Link,useParams } from 'react-router-dom';
import AdministratorSideBar from './AdministratorSideBar';
import { useState,useEffect } from 'react';
import axios from 'axios';
import Swal from "sweetalert2";
const baseUrl='http://127.0.0.1:8000/api'
function Editfilm(){
    const[categories,setCategories] = useState([]);
    const [filmData,setFilmData] = useState({
        category:'',
        title:'',
        description:'',
        image:'',
        prev_image:''
    });
    const {film_id} = useParams();
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category/')
            .then((res)=>{
                setCategories(res.data);
            });
        }catch(error){
            console.log(error)
        }
        try{
            axios.get(baseUrl+'/admin-film-detail/'+film_id)
            .then((res)=>{
                setFilmData({
                    category:res.data.category,
                    title:res.data.title,
                    description:res.data.description,
                    image:''
                })
            });
        }catch(error){
            console.log(error)
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
        if(filmData.image!==''){
            _fromData.append('image',filmData.image,filmData.image.name)
        }
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
        catch{console.log(error.responses)}
    }
}