"use client"; 
import Form from "./Form"
import FormModal from "./FormModal"
import { useState } from "react";

export default function FormController() {
    const [isModalVisible, setIsModalVisible] = useState({
        modalIsVisible: false, 
        username: ""
    }); 

    return (
        <>
            <Form setModalVisibility={setIsModalVisible}/>
            <FormModal modalState={isModalVisible.modalIsVisible} setModalVisibility={setIsModalVisible} username={isModalVisible.username}/>
        </>
    )
}