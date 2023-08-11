// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type TellMeData = {
  message: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TellMeData>
) {
  res.status(200).json({
    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vestibulum, urna eget laoreet lobortis, dolor urna tempor magna, non placerat odio nisl eu risus. Sed ullamcorper mi sit amet felis lacinia congue. Nulla lectus lorem, facilisis non arcu in, convallis tempor quam. Praesent non tortor sed ex tempor consectetur. Mauris faucibus turpis molestie placerat interdum. Aliquam finibus neque sit amet hendrerit ullamcorper. Nullam tristique neque vel bibendum vehicula. Aenean ut mauris sed nibh efficitur suscipit sit amet a mi. Sed sed nibh ac lacus fermentum feugiat eu sed libero. Vestibulum vulputate libero ac ex consequat pellentesque. Proin non rutrum lorem. Suspendisse sagittis nibh id risus auctor feugiat. Donec sagittis augue id purus pretium, id mollis urna aliquet. Proin quis interdum enim. Phasellus non libero et tellus maximus ultricies sed vel dui. Phasellus ut nisl neque.
  
  Proin nec sem vitae augue vestibulum commodo vitae quis purus. Ut scelerisque nunc ac dui dapibus ornare. Quisque nec mi a erat pulvinar tincidunt. Maecenas eget velit justo. Suspendisse sed sem quis orci semper suscipit. Pellentesque id auctor ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris felis eros, facilisis in efficitur sed, iaculis ac elit. Sed sem felis, fringilla vitae sapien ac, scelerisque interdum enim. Suspendisse potenti. Donec eros turpis, tincidunt eu gravida ut, interdum non dolor. Morbi et neque pretium, euismod lectus nec, accumsan velit. Nunc ac mi ut quam vehicula imperdiet quis ut arcu. Nullam tempor, nisl id ultricies egestas, ligula risus sodales purus, at convallis elit turpis ut odio.
  
  Pellentesque malesuada nisi id arcu semper, a fringilla nisl placerat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam eu cursus neque, ac imperdiet augue. In pellentesque facilisis mi at volutpat. Maecenas venenatis vestibulum aliquam. Aliquam a egestas ipsum. Nulla facilisi. Mauris faucibus ligula ut enim pretium tempus. Aliquam posuere in erat in lobortis. Integer risus tortor, rutrum feugiat velit vel, feugiat viverra ipsum. Sed tincidunt, metus eget gravida iaculis, enim urna aliquet est, vitae blandit ipsum mauris id ipsum.
  
  Maecenas tincidunt massa eget pulvinar dapibus. Nunc luctus nulla augue, at placerat velit commodo ac. Vivamus eleifend nunc sagittis hendrerit fermentum. Ut feugiat risus odio, eu pretium mauris varius ac. Aenean imperdiet mauris non mollis cursus. Quisque et elit fermentum, bibendum eros ac, posuere enim. Quisque ac mi sit amet velit porttitor condimentum. Donec sit amet lorem sollicitudin, ornare ante at, blandit dui. Ut faucibus varius urna, id lacinia magna consectetur in. Donec pharetra velit ut arcu gravida porttitor. Praesent enim felis, imperdiet sed justo et, accumsan aliquam lectus. Donec mauris quam, commodo vitae tempor in, gravida eget ante. Phasellus eget dignissim neque. Suspendisse dignissim euismod congue. Donec feugiat commodo nisl id tristique.
  
  Sed ac elit venenatis, tempus tortor et, pulvinar leo. Donec a ultricies massa. Integer quis ante eu neque dignissim fringilla blandit sed augue. Nunc iaculis urna eget ullamcorper fermentum. Sed lacus metus, accumsan in elit ut, pulvinar fringilla eros. Fusce convallis volutpat volutpat. Suspendisse porta pellentesque dui, ac aliquet erat lobortis eget. Morbi viverra sodales velit, vitae varius lorem luctus nec. Integer volutpat nec odio ac eleifend. Suspendisse sem erat, cursus eu feugiat eget, convallis ac ante. Proin fermentum erat nec consectetur pharetra. Mauris consequat elit ac elit aliquet, ut laoreet arcu volutpat. Aliquam erat volutpat. Praesent posuere metus non elit convallis sodales. Sed porttitor, ex vitae bibendum commodo, mauris risus ullamcorper odio, in ullamcorper purus enim id purus. Pellentesque quis suscipit lorem.`,
  });
}
