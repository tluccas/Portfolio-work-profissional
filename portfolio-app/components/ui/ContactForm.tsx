"use client";

import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const newErrors: Record<string, string> = {};
    if (!name.trim()) newErrors.name = "Nome é obrigatório.";
    if (!email.trim()) {
      newErrors.email = "Email é obrigatório.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Email inválido.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    // Implement a call to email sending route (working on it now)
    console.log({ name, email, phone, message });
  }


  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-xl space-y-4 p-6 "
    >
      <div className="flex flex-col gap-1">
        <div className="flex flex-col gap-1">
          <label className="text-base font-medium text-foreground">
            Nome
            <span className="text-accent"> *</span>
          </label>
          <input
            type="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            className={`w-full px-4 py-2 border border-action-secondary rounded-md focus:outline-none focus:ring-2 transition-colors ${
              errors.name
                ? "border-red-500 focus:border-red-500 focus:ring-red-100"
                : "focus:border-action-primary focus:ring-action-primary"
            }`}
            placeholder="Seu nome"
          />
          {errors.name && (
            <p className="text-xs text-red-500 mt-1 font-medium">
              {errors.name}
            </p>
          )}
        </div>

        <label className="text-base font-medium text-foreground">
          Email <span className="text-accent">*</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
          }}
          className={`w-full px-4 py-2 border border-action-secondary rounded-md focus:outline-none focus:ring-2 transition-colors ${
            errors.email
              ? "border-red-500 focus:border-red-500 focus:ring-red-100"
              : "focus:border-action-primary focus:ring-action-primary"
          }`}
          placeholder="Seu email"
        />
        {errors.email && (
          <p className="text-xs text-red-500 mt-1 font-medium">
            {errors.email}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-foreground">
          Telefone
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value);
            if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
          }}
          className={`w-full px-4 py-2 border border-action-secondary rounded-md focus:border-action-primary focus:ring-action-primaryfocus:outline-none focus:ring-2 transition-colors`}
          placeholder="Seu telefone"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-base font-medium text-foreground">
          Mensagem
        </label>
        <textarea
          rows={5}
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
            if (errors.message) setErrors((prev) => ({ ...prev, message: "" }));
          }}
          className={`w-full px-4 py-2 border border-action-secondary rounded-md focus:border-action-primary focus:ring-action-primary focus:outline-none focus:ring-2 transition-colors`}
          placeholder="Sua mensagem"
        />
      </div>

      <button
        type="submit"
        className="flex gap-2 px-4 py-2 rounded-sm bg-action-primary hover:cursor-pointer text-white hover:scale-102 hover:shadow-lg hover:shadow-blue-500/50 transition "
      >
        Enviar
      </button>
    </form>
  );
}
