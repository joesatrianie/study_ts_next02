import Link from "next/link";

type Props = {
  post: BlogPost;
};
export default function LIstItems({ post }: Props) {
  const { id, title, date } = post;
  return <div>LIstItems</div>;
}
