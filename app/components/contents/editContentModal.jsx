import { useState, useEffect } from "react";
import { useFetcher } from "react-router";

export const EditContentModal = ({
  contentId,
  title: initialTitle,
  status: initialStatus,
  createdAt: initialCreatedAt,
}) => {
  const [title, setTitle] = useState(initialTitle || "");
  const [status, setStatus] = useState(initialStatus || "");
  const [createdAt, setCreatedAt] = useState(initialCreatedAt || "");

  const fetcher = useFetcher();

  useEffect(() => {
    // Set the initial values from the props
    setTitle(initialTitle || "");
    setStatus(initialStatus || "");
    setCreatedAt(initialCreatedAt || "");
  }, [initialTitle, initialStatus, initialCreatedAt]);

  const handleSubmit = () => {
    fetcher.submit(
      {
        title,
        status,
        createdAt,
        type: "update",
        metaobjectId: contentId,
      },
      { method: "POST" },
    );
  };

  return (
    <s-stack gap="small-300">
      <s-button variant="secondary" commandFor="editModal" command="--show">
        <s-icon type="edit" />
      </s-button>

      <s-modal id="editModal" heading="Edit Content">
        <s-stack direction="inline" gap="small-300">
          <s-text-field
            label="Title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <s-select
            label="Status"
            onChange={(e) => setStatus(e.target.value)}
            value={status}
          >
            <s-option value="draft">Draft</s-option>
            <s-option value="published">Published</s-option>
          </s-select>

          <s-date-field
            label="Created At"
            value={createdAt}
            onChange={(e) => setCreatedAt(e.target.value)}
            name="createdAt"
          />
        </s-stack>

        <s-button
          slot="secondary-actions"
          commandFor="editModal"
          command="--hide"
        >
          Close
        </s-button>

        <s-button
          onClick={handleSubmit}
          slot="primary-action"
          variant="primary"
          commandFor="editModal"
          command="--hide"
        >
          Save Changes
        </s-button>
      </s-modal>
    </s-stack>
  );
};
