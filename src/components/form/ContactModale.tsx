import { useEffect, useMemo, useState } from "react"
import { useI18n } from "../../i18n/useI18n"

type ContactModalProps = {
  isOpen: boolean
  onClose: () => void
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const { t } = useI18n()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen, onClose])

  // Lock scroll
  useEffect(() => {
    if (!isOpen) return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [isOpen])

  const mailtoHref = useMemo(() => {
    const to = "quentinmer@quentinmercier.dev"
    const subject = encodeURIComponent(`[Portfolio] Message de ${name || "Quelqu’un"} (${email || "sans email"})`)
    const body = encodeURIComponent(
      `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n`
    )
    return `mailto:${to}?subject=${subject}&body=${body}`
  }, [name, email, message])

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // ouvre le client mail avec le message pré-rempli
    window.location.href = mailtoHref
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[999]">
      {/* overlay (clique pour fermer) */}
      <button
        aria-label="Close contact modal overlay"
        onClick={onClose}
        className="absolute inset-0 bg-black/50"
      />

      {/* modal */}
      <div className="relative mx-auto mt-24 w-[92%] max-w-xl rounded-xl bg-bg-primary border border-black/15 shadow-lg overflow-hidden">
        <div className="flex items-center justify-between p-5 border-b border-black/10">
          <h3 className="text-2xl font-abril">{t("contact.modal.title")}</h3>

          <button
            type="button"
            onClick={onClose}
            className="h-10 w-10 grid place-items-center rounded-md border border-black/15 hover:bg-black/5"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <form onSubmit={onSubmit} className="p-5 flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">{t("contact.modal.name")}</span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/30"
              placeholder={t("contact.modal.namePh")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">{t("contact.modal.email")}</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/30"
              placeholder={t("contact.modal.emailPh")}
            />
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm text-text-secondary">{t("contact.modal.message")}</span>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={6}
              className="rounded-md border border-black/15 px-3 py-2 outline-none focus:ring-2 focus:ring-accent/30 resize-none"
              placeholder={t("contact.modal.messagePh")}
            />
          </label>

          
            <button
              type="submit"
              className="py-3 rounded-sm bg-accent text-bg-primary hover:bg-hover"
            >
              {t("contact.modal.send")}
            </button>
        

          <p className="text-xs text-text-secondary pt-1">
            {t("contact.modal.noteMailto")}
          </p>
        </form>
      </div>
    </div>
  )
}

export default ContactModal