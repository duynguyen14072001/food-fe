import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import * as API from '@/api/orders'
import type { Order, OrderResult, ParamsList } from '@/interface'

export const useOrderStore = defineStore('order', () => {
    const orders = ref({} as OrderResult)
    const orderDetail = ref({} as Order)
    const query = ref<ParamsList>({})

    const list = async (payload: Record<string, any>) => {
        try {
            const data = await API.list(payload)
            query.value = payload
            return (orders.value = data.result)
        } catch (error: any) {
            return error
        }
    }

    const detail = async (id: number) => {
        try {
            const { result, status_code } = await API.detail(id)
            orderDetail.value = result
            return { ...orderDetail.value, status_code }
        } catch (error: any) {
            return error
        }
    }

    const getOrders = computed(() => orders.value)
    const getOrderDetail = computed(() => orderDetail.value)

    return {
        getOrders,
        getOrderDetail,
        list,
        detail,
    }
})
