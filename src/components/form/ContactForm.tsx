import { useState } from "react";
import { useI18n } from "../../i18n/useI18n";

interface ContactFormProps {
    onSubmitted?: () => void;
}

export default function ContactForm({ onSubmitted }: ContactFormProps) {
    const { t } = useI18n();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const isFormValid =
        formData.name.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.message.trim().length >= 5;

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { id, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);
        if (!isFormValid) return;

        const to = "quentinmer@quentinmercier.dev";
        const subject = `Contact de ${formData.name}`;
        const body =
            `Message de: ${formData.name}\n` +
            `Email: ${formData.email}\n\n` +
            `Message:\n${formData.message}`;

        const mailtoLink = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;

        window.location.href = mailtoLink;

        onSubmitted?.();
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6 font-family-geist">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label htmlFor="name" className="block mb-2">
                        {t("contact.form.name")}
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-slate-600 rounded-md"
                    />
                    {isSubmitted && !formData.name.trim() && (
                        <p className="text-red-500 text-sm mt-1">
                            name is required
                        </p>
                    )}
                </div>

                <div>
                    <label htmlFor="email" className="block mb-2">
                        {t("contact.form.email")}
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-slate-600 rounded-md"
                    />
                    {isSubmitted && !formData.email.trim() && (
                        <p className="text-red-500 text-sm mt-1">
                            email is required
                        </p>
                    )}
                </div>
            </div>

            <div>
                <label htmlFor="message" className="block mb-2">
                    {t("contact.form.message")}
                </label>
                <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full p-2 border border-slate-600 rounded-md"
                    minLength={5}
                />
                {isSubmitted && formData.message.trim().length < 5 && (
                    <p className="text-red-500 text-sm mt-1">

                        The message must contain at least 5 characters
                    </p>
                )}
            </div>

            <button
                type="submit"
                className={`w-full px-8 py-3 bg-transparent text-2xl text-slate-100 border border-orange-500 hover:bg-orange-500 rounded-md transition-colors ${isFormValid
                        ? "hover:bg-black hover:text-white cursor-pointer"
                        : "opacity-50 cursor-not-allowed"
                    }`}
            >
                {t("contact.form.send")}
            </button>
        </form>
    );
}