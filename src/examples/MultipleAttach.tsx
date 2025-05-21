import { useAttach } from "../hooks/useAttach";

export function MultipleAttachmentsExample() {
  const combinedAttachments = (element: HTMLElement) => {
    const addBorder = () => {
      element.style.border = "2px solid #6366f1"; // indigo-500
      return () => {
        element.style.border = "";
      };
    };

    const addPadding = () => {
      element.style.padding = "16px";
      return () => {
        element.style.padding = "";
      };
    };

    const addBackground = () => {
      element.style.backgroundColor = "#eef2ff"; // indigo-50
      return () => {
        element.style.backgroundColor = "";
      };
    };

    const cleanup1 = addBorder();
    const cleanup2 = addPadding();
    const cleanup3 = addBackground();

    return () => {
      cleanup1?.();
      cleanup2?.();
      cleanup3?.();
    };
  };

  const divRef = useAttach<HTMLDivElement>(combinedAttachments);

  return (
    <section className="flex flex-col items-center gap-6 p-6 bg-white rounded-lg shadow max-w-md mx-auto mt-10">
      <h2 className="text-lg font-semibold mb-2">
        🔗 Multiple Attachments Example
      </h2>
      <div
        ref={divRef}
        className="text-center font-medium text-indigo-700 transition-all duration-300"
      >
        This element has multiple attachments!
      </div>
    </section>
  );
}
