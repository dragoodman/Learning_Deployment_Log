"use client";

import { FormEvent, useCallback, useEffect, useState } from "react";
import { LearningEntry, hasSupabaseConfig, supabase } from "@/lib/supabase";

const tools = ["GitHub", "Vercel", "Supabase", "Next.js", "Other"];

function formatEntryDate(value: string) {
  const hasTimezone = /(?:z|[+-]\d{2}:\d{2})$/i.test(value);
  const date = new Date(hasTimezone ? value : `${value}Z`);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(undefined, {
    month: "numeric",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export default function Home() {
  const [entries, setEntries] = useState<LearningEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const loadEntries = useCallback(async () => {
    if (!supabase) {
      setLoading(false);
      setMessage("Add Supabase environment variables to save and view entries.");
      return;
    }

    setLoading(true);
    const { data, error } = await supabase
      .from("learning_entries")
      .select("id, created_at, title, tool, note, next_step")
      .order("created_at", { ascending: false });

    if (error) {
      setMessage(error.message);
    } else {
      setEntries(data ?? []);
      setMessage("");
    }

    setLoading(false);
  }, []);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      loadEntries();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [loadEntries]);

  async function addEntry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!supabase) {
      setMessage("Supabase is not connected yet.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const entry = {
      title: String(formData.get("title") ?? "").trim(),
      tool: String(formData.get("tool") ?? "").trim(),
      note: String(formData.get("note") ?? "").trim(),
      next_step: String(formData.get("next_step") ?? "").trim(),
    };

    if (!entry.title || !entry.tool || !entry.note) {
      setMessage("Title, tool, and note are required.");
      return;
    }

    setSaving(true);

    try {
      const { data, error } = await supabase
        .from("learning_entries")
        .insert(entry)
        .select("id, created_at, title, tool, note, next_step")
        .single();

      if (error) {
        setMessage(error.message);
      } else {
        event.currentTarget.reset();
        setEntries((currentEntries) =>
          data ? [data, ...currentEntries] : currentEntries,
        );
        setMessage("Entry saved.");
        void loadEntries();
      }
    } finally {
      setSaving(false);
    }
  }

  return (
    <main className="page">
      <section className="header">
        <h1>Learning Deployment Log</h1>
        <p>
          A small place to record what you practiced while learning GitHub,
          Vercel, and Supabase.
        </p>
      </section>

      <section className="layout" aria-label="Learning entries">
        <div className="panel">
          <h2>Add entry</h2>
          <form className="form" onSubmit={addEntry}>
            <label className="field">
              <span>Title</span>
              <input name="title" placeholder="Pushed first commit" required />
            </label>

            <label className="field">
              <span>Tool</span>
              <select name="tool" defaultValue="GitHub" required>
                {tools.map((tool) => (
                  <option key={tool} value={tool}>
                    {tool}
                  </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span>Note</span>
              <textarea
                name="note"
                placeholder="What did you do or figure out?"
                required
              />
            </label>

            <label className="field">
              <span>Next step</span>
              <input name="next_step" placeholder="Connect Vercel" />
            </label>

            <button className="button" type="submit" disabled={saving || !hasSupabaseConfig}>
              {saving ? "Saving..." : "Save entry"}
            </button>
          </form>
        </div>

        <div className="panel">
          <h2>Saved entries</h2>
          {message ? <p className="status">{message}</p> : null}
          {loading ? <p className="status">Loading entries...</p> : null}
          {!loading && entries.length === 0 && hasSupabaseConfig ? (
            <p className="status">No entries yet.</p>
          ) : null}
          <div className="entry-list">
            {entries.map((entry) => (
              <article className="entry" key={entry.id}>
                <h3>{entry.title}</h3>
                <p className="entry-meta">
                  {entry.tool} · {formatEntryDate(entry.created_at)}
                </p>
                <p>{entry.note}</p>
                {entry.next_step ? (
                  <p className="next-step">Next: {entry.next_step}</p>
                ) : null}
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
