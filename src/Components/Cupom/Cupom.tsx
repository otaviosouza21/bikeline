'use client'

import Descount from "@/Components/Cupom/Form/Descount/Descount";
import { Form } from "@/Components/Cupom/Form/Form";
import ModalCupom from "@/Components/Cupom/Form/ModalCupom/ModalCupom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";


export function Cupom() {
    const [modal, setModal] = useState(false)
    function onclose() {
        setModal(!modal)
    }
    return (<section className="grid grid-cols-2  px-20  mt-10 overflow-hidden max-sm:gap-5 max-sm:rounded-0 max-sm:mt-2 max-sm:m-0 max-sm:px-0 gap-15 max-sm:bg-transparent rounded-xl max-lg:px-5 max-lg:flex max-lg:flex-col">
        {modal && <ModalCupom cupomShopee="BIKELINE5" onClose={onclose} />}
        <Descount />
        <Form setModal={setModal} />
        <ToastContainer />
    </section>)
}