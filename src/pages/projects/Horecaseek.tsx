import { Link } from "react-router-dom"
import { useI18n } from "../../i18n/useI18n"

export default function Horecaseek() {
  const { t } = useI18n()

  return (
    <article className="max-w-6xl mx-auto px-6">

      {/* Retour home */}
      <Link
        to="/"
        className="inline-block mt-10 mb-12 text-sm opacity-70 hover:opacity-100"
      >
        ← {t("project.common.back")}
      </Link>

      {/* HERO */}
      <section className="mb-24">
        <h1 className="text-5xl font-abril mb-4">
          {t("project.horecaseek.title")}
        </h1>

        <p className="text-xl text-text-secondary max-w-2xl">
          {t("project.horecaseek.subtitle")}
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <span className="px-3 py-1 border rounded-full text-sm">UX/UI</span>
          <span className="px-3 py-1 border rounded-full text-sm">Web App</span>
          <span className="px-3 py-1 border rounded-full text-sm">Desktop-first</span>
        </div>
      </section>

      {/* CONTEXT */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.context.title")}
        </h2>
        <p className="max-w-3xl text-text-secondary">
          {t("project.horecaseek.context.text")}
        </p>
      </section>

      {/* OBJECTIVES */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.objectives.title")}
        </h2>
        <ul className="list-disc pl-6 space-y-2 text-text-secondary">
          <li>{t("project.horecaseek.objective1")}</li>
          <li>{t("project.horecaseek.objective2")}</li>
          <li>{t("project.horecaseek.objective3")}</li>
        </ul>
      </section>

      {/* ROLE */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.role.title")}
        </h2>
        <p className="text-text-secondary">
          {t("project.horecaseek.role.text")}
        </p>
      </section>

      {/* PROCESS */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.process.title")}
        </h2>
        <p className="text-text-secondary max-w-3xl">
          {t("project.horecaseek.process.text")}
        </p>
      </section>

      {/* WIREFRAMES */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.wireframes.title")}
        </h2>
        <p className="text-text-secondary">
          {t("project.horecaseek.wireframes.text")}
        </p>
      </section>

      {/* UI */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.ui.title")}
        </h2>
        <p className="text-text-secondary">
          {t("project.horecaseek.ui.text")}
        </p>
      </section>

      {/* RESULT */}
      <section className="mb-24">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.result.title")}
        </h2>
        <p className="text-text-secondary">
          {t("project.horecaseek.result.text")}
        </p>
      </section>

      {/* LEARNINGS */}
      <section className="mb-32">
        <h2 className="text-3xl font-abril mb-4">
          {t("project.horecaseek.learnings.title")}
        </h2>
        <p className="text-text-secondary">
          {t("project.horecaseek.learnings.text")}
        </p>
      </section>

    </article>
  )
}