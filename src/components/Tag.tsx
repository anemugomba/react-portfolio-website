import React, {FC} from 'react'

interface TagProps {
    name: string
}

export const Tag:FC<TagProps> = ({name}) => {
    return (
        <div className='tag-container'>
            <span>{name}</span>
        </div>
    )
}

export default Tag