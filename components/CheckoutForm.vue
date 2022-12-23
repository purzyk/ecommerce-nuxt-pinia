<template>
    <Form @submit="onSubmit" :validation-schema="schema" v-slot="{ errors }">
        <!--Form fields-->
        <div class="col-span-3 mb-4">
            <label class="label">First Name</label>
            <Field name="firstName" :class="{ 'is-invalid': errors.firstName }" type="text" class="input" />
            <div class="invalid-feedback">{{ errors.firstName }}</div>
        </div>
        <div class="col-span-3  mb-4">
            <label for="LastName" class="label">
                Last Name
            </label>
            <Field name="lastName" type="text" id="LastName" class="input" />
            <div class="invalid-feedback">{{ errors.lastName }}</div>
        </div>
        <div class="col-span-6  mb-4">
            <label for="Email" class="label">
                Email
            </label>
            <Field name="email" type="email" id="Email" class="input" />
            <div class="invalid-feedback">{{ errors.email }}</div>

        </div>
        <div class="col-span-6  mb-4">
            <label for="Phone" class="label">
                Phone
            </label>
            <Field name="phone" type="tel" id="Phone" class="input" />
            <div class="invalid-feedback">{{ errors.phone }}</div>

        </div>
        <fieldset class="col-span-6 mb-4">
            <legend class="block text-sm font-medium text-gray-700">
                Card Details
            </legend>
            <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                <div>
                    <label for="CardNumber" class="sr-only"> Card Number </label>
                    <Field name="cardNumber" type="text" id="CardNumber" placeholder="Card Number"
                        class="cardDetails  mt-1 rounded-t-md" />
                    <div class="invalid-feedback">{{ errors.cardNumber }}</div>

                </div>
                <div class="flex ">
                    <div class="flex-1">
                        <label for="CardExpiry" class="sr-only"> Card Expiry </label>
                        <Field name="cardExpiry" type="text" id="CardExpiry" placeholder="Expiry Date"
                            class="cardDetails rounded-bl-md" />
                        <div class="invalid-feedback">{{ errors.cardExpiry }}</div>

                    </div>
                    <div class="flex-1">
                        <label for="CardCVC" class="sr-only"> Card CVC </label>
                        <Field name="cardCVC" type="text" id="CardCVC" placeholder="CVC"
                            class="cardDetails rounded-br-md" />
                        <div class="invalid-feedback">{{ errors.cardCVC }}</div>

                    </div>
                </div>
            </div>
        </fieldset>
        <fieldset class="col-span-6 mb-4">
            <div class="mt-1 -space-y-px bg-white rounded-md shadow-sm">
                <div>

                    <label for="country" class="label">
                        Country
                    </label>
                    <Field name="country" as="select"
                        class="relative w-full border-gray-200 rounded-t-md focus:z-10 sm:text-sm"
                        :class="{ 'is-invalid': errors.country }">
                        <option value=""></option>
                        <option value="Poland">Poland</option>
                        <option value="Germany">Germany</option>
                        <option value="Ukraine">Ukraine</option>
                    </Field>
                    <div class="invalid-feedback">{{ errors.country }}</div>
                </div>
                <div>
                    <label class="sr-only" for="PostalCode"> ZIP/Post Code </label>
                    <Field name="postalCode" type="text" id="PostalCode" placeholder="ZIP/Post Code"
                        class="cardDetails" />
                    <div class="invalid-feedback">{{ errors.postalCode }}</div>

                </div>
            </div>
        </fieldset>
        <fieldset class="col-span-6 mb-4">
            <div class="form-group form-check">
                <Field name="acceptTerms" type="checkbox" id="acceptTerms" value="true" class="form-check-input"
                    :class="{ 'is-invalid': errors.acceptTerms }" />
                <label for="acceptTerms" class="ml-2 text-sm font-medium text-gray-700">Accept Terms &
                    Conditions</label>
                <div class="invalid-feedback">{{ errors.acceptTerms }}</div>
            </div>
        </fieldset>

        <!--Form submit button-->

        <div class="col-span-6">

            <button type="submit"
                class="block w-full rounded-md bg-black p-2.5 text-sm text-white transition hover:shadow-lg">Pay
                now</button>
        </div>
    </Form>

</template>

<script setup>
import { Form, Field } from 'vee-validate';
import * as Yup from 'yup';

const schema = Yup.object().shape({
    firstName: Yup.string()
        .required('First Name is required'),
    lastName: Yup.string()
        .required('Last Name is required'),
    email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
    phone: Yup.string()
        .required('Phone is required'),
    cardNumber: Yup.string()
        .required('Card number is required'),
    cardExpiry: Yup.string()
        .required('Card expiry is required'),
    cardCVC: Yup.string()
        .required('CVC required'),
    country: Yup.string()
        .required('Country is required'),
    postalCode: Yup.string()
        .required('Postal code is required'),
    acceptTerms: Yup.string()
        .required('Please accept Ts & C')
});

function onSubmit(values) {
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(values, null, 4));
}
</script>