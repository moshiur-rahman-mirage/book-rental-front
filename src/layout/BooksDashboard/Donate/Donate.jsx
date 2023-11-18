import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

//const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=ffb0b38d5ef00b42e67cbd94cc6f2192`;

const Donate = () => {
    const { register, handleSubmit, reset } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();

    const categoryUrl = '/category'
    const { data: categories = [], refetch } = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const res = await axiosPublic.get(categoryUrl);
            // console.log(res)
            return res.data;
        }
    })


    const onSubmit = async (data) => {
  
        const imageFile = { image: data.image[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        if (res.data.success) {
            // now send the menu item data to the server with the image url
            const book = {
                title: data.title,
                category: data.category,
                author: data.author,
                publication_year: data.publication_year,
                isbn: data.isbn,
                image: res.data.data.display_url
            }
            // 
            const bookRes = await axiosSecure.post('/books', book);
            console.log(bookRes.data)
            if(bookRes.data.insertedId){

                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu.`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }
        console.log( 'with image url', res.data);
    };

    return (
        <div>
          
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Book Name*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Recipe Name"
                            {...register('title', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Author*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Author"
                            {...register('author', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Publication year*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="publication_year"
                            {...register('publication_year', { required: true })}
                            required
                            className="input input-bordered w-full" />
                    </div>
                    <div className="flex gap-6">
                        {/* category */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Subject*</span>
                            </label>
                            <select defaultValue="default" {...register('subject', { required: true })}
                                className="select select-bordered w-full">
                               {categories.map((category) => (
                                    <option
                                        key={category._id}
                                        value={category.name}

                                    >
                                        {category.name}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">ISBN*</span>
                            </label>
                            <input
                                type="number"
                                placeholder="ISBN"
                                {...register('isbn', { required: true })}
                                className="input input-bordered w-full" />
                        </div>

                    </div>


                    <div className="form-control w-full my-6">
                        <input {...register('image', { required: true })} type="file" className="file-input w-full max-w-xs" />
                    </div>

                    <button className="btn">
                        Add Book
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Donate;