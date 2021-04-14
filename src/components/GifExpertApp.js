import React, {useState} from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

export const GifExpertApp = () => {

    const [categorias, setCategorias] = useState(['Step 1']);
    
    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={setCategorias}/>
            <hr />
            <ol>
                {
                    categorias.map( category => (
                        <GifGrid 
                        key={category}
                        category={category}/>
                    ))
                }
            </ol>

        </div>
    )
}
