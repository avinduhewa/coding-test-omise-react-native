import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { Form, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import CardNumberInput from "../inputs/CardNumberInput";

import verifiedVisaBadge from "../../../assets/verified-by-visa.png";
import masterCardSecureBadge from "../../../assets/mastercard-securecode-grey.png";
import omiseLogo from "../../../assets/omise-grey.png";
import StyledTextInput from "../inputs/StyledTextInput";
import { useHeaderHeight } from "@react-navigation/elements";
import { useSelector } from "react-redux";

const creditCardSchema = Yup.object().shape({
  cardNumber: Yup.string()
    .matches(/^\d{4} \d{4} \d{4} \d{4}$/, "Invalid card number")
    .required("Card number is required"),
  expiryDate: Yup.string()
    .matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid expiry date")
    .required("Expiry date is required"),
  securityCode: Yup.string()
    .matches(/^\d{3,4}$/, "Invalid CVV")
    .required("CVV is required"),
  name: Yup.string()
    .matches(/^[a-zA-Z\s]*$/, "Invalid cardholder name")
    .required("Name is required"),
});

export default function CardForm(props) {
  const { handleAddCard } = props;
  const isLoading = useSelector((state) => state.cards.status == "loading");
  const headerHeight = useHeaderHeight();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(creditCardSchema),
    defaultValues: {
      cardNumber: "",
      name: "",
      expiryDate: "",
      securityCode: "",
    },
  });

  const onPressSend = (formData) => {
    handleAddCard(formData);
    // Perform actions with the validated form data
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={headerHeight}
    >
      <View style={styles.form}>
        <CardNumberInput name="cardNumber" control={control} errors={errors} />
        <StyledTextInput
          label="Name on Card"
          placeholder="John Doe"
          name="name"
          control={control}
          errors={errors}
        />
        <View style={styles.rowContainer}>
          <StyledTextInput
            label="Expiry Date"
            placeholder="MM/YY"
            containerStyle={styles.fieldGroup}
            name="expiryDate"
            control={control}
            errors={errors}
          />
          <StyledTextInput
            label="CVV"
            containerStyle={styles.fieldGroup}
            name="securityCode"
            control={control}
            errors={errors}
          />
        </View>
        <View style={styles.footer}>
          <Image
            source={verifiedVisaBadge}
            width={40}
            height={40}
            resizeMethod="auto"
          />
          <Image
            source={masterCardSecureBadge}
            width={40}
            height={40}
            resizeMethod="auto"
          />
          <Image
            source={omiseLogo}
            width={40}
            height={40}
            resizeMethod="auto"
          />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={handleSubmit(onPressSend)}
        >
          {isLoading ? (
            <ActivityIndicator color="white" />
          ) : (
            <Text style={styles.addButtonText}>Add Card</Text>
          )}
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#FFF",
    paddingTop: 40,
  },

  form: {
    flex: 1,
  },

  fieldContainer: {
    marginBottom: 22,
  },

  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
  },
  fieldGroup: {
    flex: 1,
    marginBottom: 22,
  },

  label: {
    fontSize: 15,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    height: 56,
    borderColor: "#E6E3E6",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 20,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginHorizontal: 30,
  },

  buttonContainer: {
    justifyContent: "flex-end",
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 40,
  },
  addButton: {
    justifyContent: "flex-end",
    backgroundColor: "#4AD8DA",
    alignItems: "center",
    padding: 15,
    borderRadius: 22.5,
    width: "100%",
  },
  addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
