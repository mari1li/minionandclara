/* Stock game scenarios: 5 facts known at that moment, then roughly what happened ~1 year later.
   c = approximate % change of the share price after ~1 year (rounded). */
const SCENARIOS = [
{n:"Meta Platforms",t:"META",s:"Mạng xã hội · Quảng cáo",w:"Tháng 11/2022",c:260,f:[
"Cổ phiếu đã rơi khoảng 77% từ đỉnh, mất hơn 750 tỷ USD vốn hóa.",
"P/E chỉ khoảng 9–11 lần, rẻ hơn mặt bằng chung thị trường S&P 500.",
"Mảng metaverse (Reality Labs) lỗ 3,7 tỷ USD chỉ trong một quý, và công ty nói năm sau còn lỗ nhiều hơn.",
"Công ty vừa sa thải 11.000 người (~13% nhân sự), đợt lớn nhất lịch sử, và tuyên bố cắt giảm chi tiêu.",
"Apple đổi chính sách quyền riêng tư khiến quảng cáo nhắm mục tiêu kém hiệu quả; TikTok đang giành người dùng trẻ."],
l:"Công ty vẫn lãi rất lớn từ quảng cáo, P/E thấp, và việc cắt giảm chi phí (\"năm của hiệu quả\") làm lợi nhuận bật lại. Doanh nghiệp còn kiếm tiền tốt mà thị trường quá bi quan thường là cơ hội."},

{n:"Netflix",t:"NFLX",s:"Phim trực tuyến",w:"Tháng 4/2022",c:45,f:[
"Lần đầu tiên sau hơn 10 năm mất thuê bao: giảm 200.000 người trong một quý.",
"Công ty dự báo quý tới mất thêm khoảng 2 triệu thuê bao.",
"Cổ phiếu rơi 35% chỉ trong một ngày, giảm khoảng 62% từ đầu năm.",
"Khoảng 100 triệu hộ đang dùng chung mật khẩu mà không trả tiền.",
"Sau nhiều năm từ chối, công ty quay sang tính làm gói rẻ có quảng cáo và thu phí chia sẻ mật khẩu."],
l:"Giá còn rơi thêm vài tuần, nhưng gói quảng cáo và việc chặn chia sẻ mật khẩu kéo thuê bao tăng trở lại. Tin xấu đã vào giá, và công ty có kế hoạch rõ để sửa."},

{n:"Zoom Video",t:"ZM",s:"Phần mềm họp trực tuyến",w:"Tháng 10/2020",c:-50,f:[
"Doanh thu quý tăng 355% so với cùng kỳ năm trước.",
"Cổ phiếu đã tăng khoảng 690% chỉ từ đầu năm.",
"Định giá cực cao: P/E khoảng 200 lần, P/B khoảng 128 lần.",
"Microsoft Teams tăng 53% người dùng; Google cho họp miễn phí đến 100 người.",
"Khách hàng nhỏ (dưới 10 nhân viên, dễ hủy) chiếm khoảng 36% doanh thu; tin vaccine đang tới gần."],
l:"Tăng trưởng tuyệt vời nhưng giá đã \"trả trước\" cho nhiều năm. Khi mọi người quay lại văn phòng và đối thủ miễn phí cạnh tranh, giá sụp. Công ty tốt chưa chắc là cổ phiếu tốt nếu mua quá đắt."},

{n:"NVIDIA",t:"NVDA",s:"Chip bán dẫn",w:"Tháng 10/2022",c:300,f:[
"Cổ phiếu giảm khoảng 62% từ đầu năm, chạm đáy 52 tuần.",
"Mỹ cấm bán chip AI cao cấp (A100, H100) sang Trung Quốc, ảnh hưởng khoảng 400 triệu USD doanh thu mỗi quý.",
"Doanh thu mảng game giảm mạnh, nhu cầu GPU đào coin gần như biến mất.",
"Ngân hàng trung ương Mỹ tăng lãi suất liên tục, lạm phát khoảng 8,2%.",
"P/E dự phóng khoảng 23 lần; công ty vừa bắt đầu giao chip data center thế hệ mới."],
l:"Vài tuần sau ChatGPT ra mắt, cơn sốt AI làm nhu cầu chip data center bùng nổ. Thị trường hay nhìn vào mảng đang xấu mà bỏ qua mảng sắp bùng nổ."},

{n:"Boeing",t:"BA",s:"Sản xuất máy bay",w:"Tháng 3/2019",c:-60,f:[
"Dòng máy bay chủ lực rơi lần thứ hai trong chưa đầy 5 tháng; nhiều nước cấm bay toàn bộ dòng này.",
"Chỉ 10 ngày trước, cổ phiếu vừa lập đỉnh mọi thời đại.",
"Sau tai nạn, giá mới giảm khoảng 16% và vẫn tăng khoảng 15% từ đầu năm.",
"Nhiều năm liền công ty dồn hàng chục tỷ USD mua lại cổ phiếu của chính mình.",
"Dòng máy bay bị cấm là dòng bán chạy và lời nhất của công ty."],
l:"Lệnh cấm bay kéo dài cả năm, doanh thu giảm 25%, CEO bị sa thải, rồi dịch bệnh đóng băng hàng không. Khi vấn đề nằm ở sản phẩm cốt lõi, mức giảm ban đầu thường chưa phải đáy."},

{n:"Apple",t:"AAPL",s:"Điện thoại · Công nghệ",w:"Tháng 1/2019",c:100,f:[
"Công ty cảnh báo doanh thu lần đầu tiên sau 17 năm, hạ dự báo quý xuống còn 84 tỷ USD.",
"Lý do chính: iPhone bán kém ở Trung Quốc khi kinh tế nước này chậm lại.",
"Cổ phiếu đã giảm hơn 30% từ đỉnh 52 tuần.",
"P/E dự phóng khoảng 12,6 lần, cổ tức khoảng 1,9%/năm.",
"Mảng dịch vụ (App Store, iCloud…) lập kỷ lục và số thiết bị đang dùng vẫn tăng."],
l:"Một quý xấu không làm hỏng doanh nghiệp có hệ sinh thái mạnh. P/E thấp + dịch vụ tăng đều giúp cổ phiếu tăng gấp đôi."},

{n:"GameStop",t:"GME",s:"Bán lẻ trò chơi điện tử",w:"Cuối tháng 1/2021",c:-70,f:[
"Giá cổ phiếu tăng hơn 1.500% chỉ trong khoảng một tháng.",
"Số cổ phiếu bị bán khống từng vượt 100% số cổ phiếu đang lưu hành.",
"Một diễn đàn trên Reddit đang rủ nhau mua để \"ép\" các quỹ bán khống.",
"Doanh thu giảm nhiều năm liền, công ty liên tục lỗ và đóng bớt cửa hàng.",
"Người chơi ngày càng tải game online thay vì mua đĩa ở cửa hàng."],
l:"Giá được đẩy bởi đám đông chứ không phải lợi nhuận. Vài tuần sau giá rơi gần 90% từ đỉnh. Người mua sau cùng thường chịu lỗ."},

{n:"Microsoft",t:"MSFT",s:"Phần mềm · Đám mây",w:"Tháng 2/2014",c:20,f:[
"Công ty vừa bổ nhiệm CEO mới, người từng lãnh đạo mảng điện toán đám mây.",
"Doanh số máy tính cá nhân giảm nhiều năm liền.",
"Hệ điều hành Windows mới bị người dùng chê nhiều.",
"P/E khoảng 14–15 lần, cổ tức khoảng 3%/năm.",
"Nhiều người coi công ty là \"gã khổng lồ cũ\" đã lỡ cuộc đua điện thoại."],
l:"CEO mới đặt cược vào đám mây và phần mềm thuê bao. Năm đầu tăng vừa phải, nhưng 5 năm sau tăng hơn 3 lần. Rẻ + chiến lược mới đúng hướng là công thức mạnh."},

{n:"Peloton",t:"PTON",s:"Thiết bị tập tại nhà",w:"Tháng 11/2021",c:-80,f:[
"Công ty hạ dự báo doanh thu cả năm tới 1 tỷ USD.",
"Cổ phiếu rơi khoảng 35% trong một ngày, giảm khoảng 70% từ đỉnh.",
"Công ty lỗ ngày càng lớn, hàng tồn kho chất đống.",
"Phòng gym mở cửa trở lại, mọi người bớt tập ở nhà.",
"Không có lợi nhuận nên không tính được P/E."],
l:"Giảm 70% chưa có nghĩa là rẻ. Doanh nghiệp lỗ, nhu cầu thật đang giảm thì \"bắt đáy\" rất nguy hiểm."},

{n:"Tesla",t:"TSLA",s:"Xe điện",w:"Tháng 1/2023",c:100,f:[
"Cổ phiếu vừa trải qua năm tệ nhất, giảm khoảng 65%.",
"Công ty bắt đầu giảm giá xe mạnh ở nhiều nước để kích cầu.",
"CEO bận rộn với việc mua lại một mạng xã hội lớn, bán bớt cổ phiếu công ty.",
"Số xe giao năm vừa rồi vẫn tăng khoảng 40%, công ty vẫn có lãi.",
"Lãi suất vay mua xe đang tăng cao."],
l:"Nỗi lo về CEO và giảm giá xe đã bị đẩy quá đà; lợi nhuận vẫn còn và thị trường quay lại hứng thú với công nghệ. Cổ phiếu tăng gần 80% trong năm."},

{n:"Amazon",t:"AMZN",s:"Thương mại điện tử · Đám mây",w:"Tháng 1/2023",c:80,f:[
"Cổ phiếu giảm khoảng 50% trong năm vừa rồi.",
"Công ty sa thải khoảng 18.000 người, đợt lớn nhất lịch sử.",
"Tăng trưởng mảng đám mây (AWS) chậm lại khi khách hàng cắt chi phí.",
"Sau thời kỳ dịch bệnh, công ty xây kho quá nhiều, chi phí phình to.",
"Mảng quảng cáo đang tăng trưởng nhanh và có biên lợi nhuận cao."],
l:"Cắt giảm chi phí + quảng cáo + AWS hồi phục nhờ AI khiến lợi nhuận tăng mạnh. Công ty lớn tự \"dọn dẹp\" sau giai đoạn tiêu hoang thường được thưởng."},

{n:"Alphabet (Google)",t:"GOOGL",s:"Tìm kiếm · Quảng cáo",w:"Tháng 2/2023",c:50,f:[
"Một chatbot AI của công ty khác vừa gây sốt, nhiều người nói nó sẽ \"giết\" Google Search.",
"Buổi demo chatbot của Google trả lời sai, cổ phiếu mất khoảng 9% trong một ngày.",
"P/E khoảng 18–20 lần, thấp so với lịch sử của chính công ty.",
"Công ty có hàng trăm tỷ USD tiền mặt và vẫn kiếm lời rất lớn từ quảng cáo.",
"YouTube và Google Cloud vẫn tăng trưởng."],
l:"Search không chết như lo ngại; Google đưa AI vào sản phẩm và lợi nhuận tiếp tục tăng. Một buổi demo hỏng không phải là kết thúc của một cỗ máy kiếm tiền."},

{n:"Ford",t:"F",s:"Ô tô",w:"Tháng 11/2008",c:400,f:[
"Khủng hoảng tài chính toàn cầu, doanh số xe tại Mỹ lao dốc.",
"Cổ phiếu chỉ còn khoảng 1–2 USD.",
"Hai đối thủ lớn cùng nước đang xin chính phủ cứu trợ.",
"Hai năm trước, công ty đã vay lớn (thế chấp cả logo) để có tiền vượt khủng hoảng.",
"Công ty đang lỗ nặng."],
l:"Nhờ có sẵn tiền vay từ trước, Ford không phải phá sản như đối thủ. Khi kinh tế hồi phục, cổ phiếu tăng khoảng 5 lần. Thanh khoản (có đủ tiền sống sót) quyết định ai còn đứng vững."},

{n:"General Motors (cũ)",t:"GM",s:"Ô tô",w:"Tháng 11/2008",c:-95,f:[
"Khủng hoảng tài chính toàn cầu, doanh số xe tại Mỹ lao dốc.",
"Cổ phiếu chỉ còn khoảng 3 USD, thấp nhất nhiều thập kỷ.",
"Công ty đốt tiền rất nhanh và đang xin chính phủ cứu trợ.",
"Gánh nặng chi phí lương hưu và bảo hiểm cho công nhân rất lớn.",
"Các thương hiệu xe của công ty bị coi là lỗi thời so với xe Nhật."],
l:"Công ty phá sản vài tháng sau; cổ phiếu cũ gần như mất trắng dù công ty mới sau này vẫn chạy. Khi phá sản, cổ đông là người cuối cùng được trả tiền."},

{n:"Lehman Brothers",t:"LEH",s:"Ngân hàng đầu tư",w:"Tháng 3/2008",c:-100,f:[
"Một ngân hàng đầu tư đối thủ vừa sụp đổ và bị bán tháo với giá rẻ mạt.",
"Công ty vay nợ khoảng 30 đồng cho mỗi 1 đồng vốn.",
"Công ty nắm rất nhiều tài sản gắn với cho vay mua nhà, trong khi giá nhà Mỹ đang giảm.",
"Ban lãnh đạo khẳng định công ty đủ vốn và vẫn có lãi.",
"Cổ phiếu đã giảm khoảng 40% từ đỉnh."],
l:"Sáu tháng sau công ty phá sản, vụ lớn nhất lịch sử Mỹ. Nợ quá cao + tài sản rủi ro thì một cú sốc là đủ sụp đổ. Lời trấn an của ban lãnh đạo không thay được bảng cân đối kế toán."},

{n:"Bank of America",t:"BAC",s:"Ngân hàng",w:"Tháng 3/2009",c:300,f:[
"Cổ phiếu chỉ còn khoảng 3–4 USD, giảm hơn 90% từ đỉnh.",
"Ngân hàng đã nhận tiền cứu trợ từ chính phủ.",
"Nhiều người lo các ngân hàng lớn sẽ bị quốc hữu hóa.",
"Ngân hàng vừa mua lại một công ty môi giới lớn và một công ty cho vay mua nhà đang gặp rắc rối.",
"Chính phủ chuẩn bị kiểm tra sức chịu đựng (stress test) cho các ngân hàng lớn."],
l:"Ngân hàng vượt qua stress test, thị trường đi lên từ đáy và cổ phiếu tăng khoảng 4 lần trong năm. Mua lúc sợ hãi tột độ có thể lời lớn, nhưng chỉ khi công ty sống sót."},

{n:"Apple",t:"AAPL",s:"Máy tính · Điện thoại",w:"Tháng 1/2009",c:130,f:[
"Kinh tế đang suy thoái nặng, người tiêu dùng thắt chặt chi tiêu.",
"Nhà sáng lập kiêm CEO tạm nghỉ vì lý do sức khỏe.",
"Cổ phiếu đã giảm khoảng 55% từ đỉnh.",
"iPhone mới ra mắt khoảng 1,5 năm và App Store đang phát triển nhanh.",
"Công ty không có nợ và có nhiều tiền mặt."],
l:"Sản phẩm mạnh + không nợ giúp Apple vượt suy thoái; cổ phiếu tăng hơn gấp đôi trong năm. Lo lắng về một người có thể làm giá rẻ quá mức nếu doanh nghiệp vẫn tốt."},

{n:"Starbucks",t:"SBUX",s:"Chuỗi cà phê",w:"Tháng 11/2008",c:130,f:[
"Cổ phiếu chỉ còn khoảng 8–9 USD, giảm khoảng 75% từ đỉnh.",
"Công ty đóng khoảng 600 cửa hàng kém hiệu quả ở Mỹ.",
"Nhà sáng lập vừa quay lại làm CEO để vực dậy công ty.",
"Kinh tế suy thoái, nhiều người coi cà phê đắt tiền là thứ nên cắt.",
"Công ty vẫn có lãi."],
l:"Cắt bớt cửa hàng yếu, tập trung lại trải nghiệm khách hàng; cổ phiếu tăng hơn gấp đôi trong năm. Thương hiệu mạnh còn lãi lúc suy thoái thường hồi phục nhanh."},

{n:"BlackBerry (RIM)",t:"RIMM",s:"Điện thoại",w:"Tháng 6/2011",c:-70,f:[
"Từng là điện thoại thông minh phổ biến nhất cho dân văn phòng.",
"Thị phần đang mất nhanh vào iPhone và điện thoại Android.",
"Máy tính bảng mới của công ty bán rất kém.",
"P/E chỉ khoảng 4–5 lần, trông cực kỳ rẻ.",
"Công ty vừa hạ dự báo lợi nhuận và sắp cắt giảm nhân sự."],
l:"P/E thấp vì lợi nhuận tương lai đang biến mất. Một năm sau giá còn khoảng 1/3. \"Rẻ\" có thể là cái bẫy khi sản phẩm đang bị thay thế."},

{n:"Kodak",t:"EK",s:"Nhiếp ảnh",w:"Tháng 6/2011",c:-95,f:[
"Từng thống trị phim chụp ảnh, nhưng gần như ai cũng chụp bằng máy số và điện thoại.",
"Công ty đốt tiền nhiều năm liền.",
"Công ty đang tìm cách bán kho bằng sáng chế để có tiền.",
"Cổ phiếu chỉ còn vài USD.",
"Công ty có nhiều nghĩa vụ trả lương hưu lớn."],
l:"Công ty nộp đơn phá sản khoảng nửa năm sau. Khi mảng kinh doanh chính biến mất và tiền đang cạn, hy vọng bán tài sản hiếm khi cứu được cổ đông."},

{n:"Chipotle",t:"CMG",s:"Chuỗi nhà hàng",w:"Tháng 12/2015",c:-20,f:[
"Nhiều đợt khách bị ngộ độc thực phẩm (E. coli, norovirus) liên quan đến chuỗi.",
"Doanh số tại các cửa hàng cũ bắt đầu giảm mạnh.",
"Cổ phiếu đã giảm khoảng 30% từ đỉnh.",
"P/E vẫn khoảng 30 lần, cao hơn mặt bằng ngành.",
"Thương hiệu từng nổi tiếng nhờ \"thực phẩm sạch\"."],
l:"Niềm tin của khách mất nhiều thời gian để quay lại; doanh số tiếp tục yếu và giá còn giảm thêm. Khi lời hứa cốt lõi của thương hiệu bị phá vỡ, hồi phục thường chậm."},

{n:"Facebook",t:"FB",s:"Mạng xã hội",w:"Tháng 9/2012",c:150,f:[
"Cổ phiếu đã mất khoảng một nửa giá trị chỉ vài tháng sau khi lên sàn.",
"Nhà đầu tư lo công ty chưa biết kiếm tiền trên điện thoại.",
"Hơn 1 tỷ người dùng mỗi tháng.",
"Nhân viên sắp được phép bán cổ phiếu, tạo áp lực bán.",
"Doanh thu quảng cáo trên điện thoại bắt đầu xuất hiện."],
l:"Quảng cáo trên điện thoại bùng nổ nhanh hơn dự đoán, cổ phiếu tăng khoảng 2,5 lần. Một tài sản người dùng khổng lồ thường tìm ra cách kiếm tiền."},

{n:"Cisco",t:"CSCO",s:"Thiết bị mạng",w:"Tháng 3/2000",c:-75,f:[
"Công ty vừa trở thành công ty giá trị nhất thế giới.",
"P/E khoảng 150–200 lần.",
"Ai cũng nói Internet sẽ thay đổi mọi thứ và cần rất nhiều thiết bị mạng.",
"Doanh thu tăng khoảng 50%/năm.",
"Rất nhiều khách hàng là các công ty Internet mới, đang lỗ, sống nhờ vốn đầu tư."],
l:"Bong bóng dot-com vỡ, khách hàng phá sản, đơn hàng biến mất; cổ phiếu mất khoảng 3/4. Kể cả 20 năm sau giá vẫn chưa quay lại đỉnh. Câu chuyện đúng (Internet) nhưng giá sai."},

{n:"Domino's Pizza",t:"DPZ",s:"Chuỗi pizza",w:"Tháng 12/2009",c:100,f:[
"Khảo sát cho thấy khách đánh giá pizza của hãng rất tệ.",
"Hãng chạy quảng cáo thừa nhận \"pizza của chúng tôi dở\" và đổi toàn bộ công thức.",
"Cổ phiếu chỉ khoảng 8 USD.",
"Hãng đầu tư mạnh vào đặt hàng online.",
"Kinh tế vừa qua suy thoái, người ta chuộng đồ ăn rẻ."],
l:"Công thức mới + đặt hàng online giúp doanh số tăng vọt; cổ phiếu gấp đôi trong năm và tăng hàng chục lần trong 10 năm. Dám nhận lỗi và sửa sản phẩm thật sự là tín hiệu tốt."},

{n:"McDonald's",t:"MCD",s:"Chuỗi thức ăn nhanh",w:"Tháng 3/2003",c:100,f:[
"Công ty vừa báo lỗ quý đầu tiên trong lịch sử.",
"Cổ phiếu khoảng 13 USD, thấp nhất nhiều năm.",
"Khách phàn nàn về chất lượng và dịch vụ; công ty mở cửa hàng quá nhanh.",
"Ban lãnh đạo mới tuyên bố ngừng mở ồ ạt, tập trung cải thiện cửa hàng cũ.",
"Cổ tức vẫn được duy trì."],
l:"Chiến lược \"sửa nhà trước khi xây thêm\" thành công; cổ phiếu gấp đôi trong năm. Thương hiệu lớn gặp vấn đề tạm thời và có kế hoạch rõ thường hồi phục."},

{n:"Moderna",t:"MRNA",s:"Dược phẩm · Vaccine",w:"Tháng 12/2021",c:-40,f:[
"Doanh thu vaccine năm nay lên tới hàng chục tỷ USD.",
"P/E chỉ khoảng 10 lần nhờ lợi nhuận khổng lồ.",
"Gần như toàn bộ doanh thu đến từ một sản phẩm.",
"Phần lớn dân số các nước giàu đã tiêm vaccine.",
"Cổ phiếu đã tăng hơn 10 lần so với 2 năm trước."],
l:"P/E thấp là vì lợi nhuận đang ở đỉnh và sẽ giảm khi nhu cầu vaccine giảm. Cổ phiếu mất khoảng 40%. Lợi nhuận \"một lần\" không đáng được trả giá như lợi nhuận bền vững."},

{n:"Carvana",t:"CVNA",s:"Bán xe cũ online",w:"Tháng 12/2021",c:-98,f:[
"Cổ phiếu gần đỉnh sau khi tăng rất mạnh trong thời kỳ dịch bệnh.",
"Công ty chưa bao giờ có lãi.",
"Công ty vay nhiều tiền để mua lại một công ty đấu giá xe lớn.",
"Lãi suất sắp tăng, giá xe cũ đang ở mức cao kỷ lục.",
"Doanh thu tăng rất nhanh."],
l:"Lãi suất tăng + giá xe cũ giảm + nợ lớn khiến cổ phiếu mất khoảng 98%. Tăng trưởng nhờ vay nợ rất mong manh khi điều kiện đổi chiều."},

{n:"Carvana",t:"CVNA",s:"Bán xe cũ online",w:"Tháng 12/2022",c:1000,f:[
"Cổ phiếu đã mất khoảng 98% trong năm, chỉ còn khoảng 4–5 USD.",
"Nhiều người dự đoán công ty sẽ phá sản.",
"Công ty đang đàm phán tái cấu trúc khoản nợ khổng lồ.",
"Công ty đang cắt giảm nhân sự và chi phí mạnh.",
"Số cổ phiếu bị bán khống rất cao."],
l:"Công ty tái cấu trúc nợ thành công và bắt đầu có lãi; cổ phiếu tăng gần 10 lần. Cùng một công ty, mua sai thời điểm thì mất trắng, mua lúc tuyệt vọng nhất lại lời khủng (nhưng rất rủi ro)."},

{n:"Bed Bath & Beyond",t:"BBBY",s:"Bán lẻ đồ gia dụng",w:"Tháng 8/2022",c:-99,f:[
"Cổ phiếu vừa tăng vọt gấp mấy lần trong vài tuần nhờ nhà đầu tư nhỏ lẻ trên mạng.",
"Doanh số giảm mạnh nhiều quý liên tiếp.",
"Công ty đang đốt tiền và vay thêm để duy trì.",
"Một nhà đầu tư nổi tiếng vừa bán hết cổ phần ngay khi giá tăng.",
"Công ty đóng bớt cửa hàng và cắt giảm nhân sự."],
l:"Công ty phá sản chưa đầy một năm sau. Một đợt tăng giá do mạng xã hội không sửa được doanh nghiệp đang chết."},

{n:"AMC Entertainment",t:"AMC",s:"Chuỗi rạp chiếu phim",w:"Tháng 6/2021",c:-80,f:[
"Cổ phiếu tăng hơn 20 lần từ đầu năm nhờ phong trào nhà đầu tư nhỏ lẻ.",
"Công ty liên tục phát hành thêm cổ phiếu để có tiền.",
"Rạp chiếu phim vừa mở lại sau thời gian đóng cửa vì dịch.",
"Công ty gánh nợ rất lớn và đang lỗ.",
"Phim ngày càng ra mắt sớm trên các nền tảng trực tuyến."],
l:"Phát hành thêm cổ phiếu làm loãng giá trị; khi cơn sốt qua, giá mất khoảng 80%. Hãy nhìn vào doanh nghiệp, không phải độ ồn ào trên mạng."},

{n:"Coinbase",t:"COIN",s:"Sàn giao dịch tiền mã hóa",w:"Tháng 12/2022",c:380,f:[
"Một sàn tiền mã hóa đối thủ rất lớn vừa sụp đổ vì gian lận.",
"Giá Bitcoin giảm khoảng 75% từ đỉnh.",
"Cổ phiếu giảm khoảng 85% từ đầu năm.",
"Công ty sa thải gần 20% nhân sự và đang lỗ.",
"Công ty là sàn lớn, niêm yết công khai tại Mỹ, tuân thủ quy định."],
l:"Thị trường tiền mã hóa hồi phục mạnh, người dùng chuyển sang sàn được coi là an toàn hơn; cổ phiếu tăng gần 6 lần. Đối thủ sụp đổ đôi khi là cơ hội cho người sống sót."},

{n:"Robinhood",t:"HOOD",s:"Ứng dụng đầu tư",w:"Tháng 8/2021",c:-85,f:[
"Cổ phiếu vừa tăng vọt ngay sau khi lên sàn, được dân mạng săn đón.",
"Phần lớn doanh thu đến từ giao dịch quyền chọn và tiền mã hóa của nhà đầu tư nhỏ.",
"Công ty đang lỗ.",
"Lượng người dùng mới bắt đầu chững lại khi cơn sốt đầu tư thời dịch bệnh qua đi.",
"Cơ quan quản lý đang xem xét mô hình kiếm tiền của công ty."],
l:"Khi cơn sốt giao dịch nguội đi, doanh thu giảm mạnh và cổ phiếu mất khoảng 85%. Doanh thu phụ thuộc vào \"cơn sốt\" thì không bền."},

{n:"Shopify",t:"SHOP",s:"Phần mềm bán hàng online",w:"Tháng 11/2021",c:-75,f:[
"Cổ phiếu ở gần đỉnh, định giá khoảng 40–50 lần doanh thu.",
"Doanh thu tăng rất mạnh trong thời kỳ mua sắm online bùng nổ.",
"Mọi người bắt đầu quay lại cửa hàng truyền thống.",
"Lãi suất sắp tăng, cổ phiếu tăng trưởng đắt đỏ dễ bị bán.",
"Công ty đầu tư mạnh vào hệ thống kho vận riêng."],
l:"Tăng trưởng chậm lại và lãi suất tăng làm định giá co lại; cổ phiếu mất khoảng 3/4. Định giá theo nhiều lần doanh thu rất nhạy với lãi suất."},

{n:"Palantir",t:"PLTR",s:"Phần mềm phân tích dữ liệu",w:"Tháng 12/2022",c:160,f:[
"Cổ phiếu giảm khoảng 65% trong năm, chỉ còn khoảng 6–7 USD.",
"Công ty sắp đạt lợi nhuận lần đầu theo chuẩn kế toán.",
"Khách hàng lớn là chính phủ, hợp đồng dài hạn.",
"Công ty chi rất nhiều tiền thưởng cổ phiếu cho nhân viên.",
"AI đang bắt đầu được chú ý trở lại."],
l:"Công ty có lãi liên tục và làn sóng AI kéo cổ phiếu tăng gần 3 lần. Bước ngoặt từ lỗ sang lãi thường là chất xúc tác mạnh."},

{n:"AMD",t:"AMD",s:"Chip bán dẫn",w:"Tháng 10/2022",c:80,f:[
"Công ty cảnh báo doanh thu quý thấp hơn dự kiến vì thị trường máy tính cá nhân lao dốc.",
"Cổ phiếu giảm khoảng 60% từ đỉnh.",
"Chip máy chủ (data center) vẫn giành thị phần từ đối thủ lớn.",
"P/E dự phóng khoảng 15–20 lần.",
"Công ty vừa mua lại một hãng chip lớn khác."],
l:"Máy tính cá nhân chạm đáy, mảng data center và AI giúp cổ phiếu tăng khoảng 80%. Hãy tách mảng đang xấu tạm thời khỏi mảng tăng trưởng dài hạn."},

{n:"ExxonMobil",t:"XOM",s:"Dầu khí",w:"Tháng 10/2020",c:85,f:[
"Công ty vừa bị loại khỏi chỉ số Dow Jones sau gần 100 năm.",
"Giá dầu đã từng rơi xuống âm vài tháng trước vì dịch bệnh.",
"Cổ phiếu giảm khoảng 50% từ đầu năm; cổ tức tương đương khoảng 10%/năm.",
"Công ty đang lỗ và cắt giảm đầu tư.",
"Nhiều quỹ bán cổ phiếu dầu khí vì lo ngại môi trường."],
l:"Khi kinh tế mở cửa lại, giá dầu tăng mạnh và cổ phiếu tăng gần gấp đôi. Khi ai cũng ghét một ngành, giá có thể đã quá rẻ."},

{n:"Vàng (quỹ GLD)",t:"GLD",s:"Kim loại quý",w:"Tháng 8/2011",c:-15,f:[
"Giá vàng vừa lập đỉnh mọi thời đại, khoảng 1.900 USD/ounce.",
"Giá vàng đã tăng liên tục khoảng 10 năm liền.",
"Ngân hàng trung ương Mỹ đang in tiền (QE) để hỗ trợ kinh tế.",
"Mỹ vừa bị hạ xếp hạng tín nhiệm lần đầu tiên trong lịch sử.",
"Ai cũng nói về vàng như nơi trú ẩn an toàn."],
l:"Nỗi sợ qua đi, vàng giảm khoảng 15% sau 1 năm và còn giảm sâu hơn sau đó. Mua khi tài sản lên trang nhất và ai cũng nói về nó thường là mua ở đỉnh."},

{n:"Vàng (quỹ GLD)",t:"GLD",s:"Kim loại quý",w:"Tháng 1/2024",c:35,f:[
"Giá vàng khoảng 2.050 USD/ounce, gần đỉnh lịch sử.",
"Các ngân hàng trung ương mua vàng ở mức kỷ lục nhiều năm liền.",
"Thị trường kỳ vọng lãi suất ở Mỹ sắp giảm.",
"Căng thẳng địa chính trị ở nhiều nơi trên thế giới.",
"Nợ công của Mỹ tiếp tục tăng mạnh."],
l:"Lãi suất giảm và ngân hàng trung ương tiếp tục mua, vàng tăng khoảng 27%. Gần đỉnh không có nghĩa là hết dư địa nếu lực mua thật vẫn còn."},

{n:"Novo Nordisk",t:"NVO",s:"Dược phẩm · Thuốc giảm cân",w:"Tháng 6/2024",c:-50,f:[
"Thuốc giảm cân và tiểu đường của công ty đang cháy hàng toàn cầu.",
"Công ty trở thành công ty giá trị nhất châu Âu.",
"P/E khoảng 40–45 lần.",
"Một đối thủ Mỹ có thuốc tương tự, hiệu quả giảm cân cao hơn trong thử nghiệm.",
"Nhiều nơi bán thuốc pha chế \"nhái\" với giá rẻ."],
l:"Cạnh tranh mạnh hơn dự kiến và tăng trưởng chậm lại, cổ phiếu mất khoảng một nửa. Định giá cao đòi hỏi mọi thứ phải hoàn hảo; chỉ cần lệch một chút là rơi mạnh."},

{n:"Eli Lilly",t:"LLY",s:"Dược phẩm",w:"Tháng 1/2023",c:80,f:[
"Thuốc tiểu đường mới của công ty cho thấy hiệu quả giảm cân rất mạnh.",
"Công ty đang chờ phê duyệt thuốc này cho điều trị béo phì.",
"P/E khoảng 50 lần, đắt so với ngành dược.",
"Béo phì ảnh hưởng hàng trăm triệu người trên thế giới.",
"Công ty còn nhiều thuốc tiềm năng khác đang thử nghiệm (ví dụ Alzheimer)."],
l:"Thuốc được duyệt cho béo phì và doanh thu bùng nổ, cổ phiếu tăng khoảng 70%. Đắt vẫn có thể đúng nếu thị trường của sản phẩm đủ lớn."},

{n:"Silicon Valley Bank",t:"SIVB",s:"Ngân hàng",w:"Tháng 2/2023",c:-100,f:[
"Khách hàng chủ yếu là các startup công nghệ và quỹ đầu tư mạo hiểm.",
"Ngân hàng dùng tiền gửi mua rất nhiều trái phiếu dài hạn khi lãi suất còn thấp.",
"Lãi suất đã tăng nhanh, khiến các trái phiếu đó lỗ lớn trên giấy.",
"Các startup đang rút tiền gửi vì gọi vốn khó hơn.",
"Phần lớn tiền gửi vượt mức được bảo hiểm."],
l:"Chỉ vài tuần sau, khách hàng rút tiền ồ ạt và ngân hàng sụp đổ trong 2 ngày. Lãi suất tăng + tiền gửi dễ rút + khách hàng giống nhau = rủi ro cực lớn."},

{n:"Uber",t:"UBER",s:"Gọi xe · Giao đồ ăn",w:"Tháng 12/2022",c:150,f:[
"Cổ phiếu giảm khoảng 40% trong năm.",
"Công ty sắp đạt lợi nhuận hoạt động lần đầu sau nhiều năm lỗ.",
"Số chuyến đi đã vượt mức trước dịch bệnh.",
"Mảng giao đồ ăn tăng trưởng mạnh trong thời kỳ dịch.",
"Công ty bắt đầu tạo ra dòng tiền tự do dương."],
l:"Lợi nhuận và dòng tiền đến như kỳ vọng, cổ phiếu tăng khoảng gấp đôi. Thời điểm doanh nghiệp chuyển từ \"đốt tiền\" sang \"kiếm tiền\" là lúc thị trường định giá lại."},

{n:"Spotify",t:"SPOT",s:"Nghe nhạc trực tuyến",w:"Tháng 12/2022",c:140,f:[
"Cổ phiếu giảm khoảng 65% trong năm.",
"Công ty đang lỗ vì chi rất nhiều cho podcast độc quyền.",
"Số người dùng vẫn tăng đều, hơn 450 triệu người.",
"Công ty chưa tăng giá gói trả phí nhiều năm.",
"Công ty sắp cắt giảm nhân sự và chi phí."],
l:"Cắt chi phí + tăng giá gói giúp công ty có lãi; cổ phiếu tăng khoảng 2,4 lần. Người dùng trung thành cho phép doanh nghiệp tăng giá mà không mất khách."},

{n:"Beyond Meat",t:"BYND",s:"Thịt thực vật",w:"Tháng 7/2019",c:-40,f:[
"Cổ phiếu tăng khoảng 8 lần chỉ sau vài tháng lên sàn.",
"Doanh thu tăng hơn gấp đôi mỗi năm.",
"Công ty đang lỗ.",
"Nhiều hãng thực phẩm lớn chuẩn bị ra sản phẩm cạnh tranh.",
"Công ty sắp phát hành thêm cổ phiếu."],
l:"Cạnh tranh tăng và giá đã quá cao, cổ phiếu mất khoảng 40% sau 1 năm, về sau còn mất hơn 95%. Sản phẩm \"hot\" không có rào cản cạnh tranh thì khó giữ giá trị."},

{n:"Apple",t:"AAPL",s:"Điện thoại · Công nghệ",w:"Tháng 5/2016",c:65,f:[
"Doanh số iPhone giảm lần đầu tiên trong lịch sử.",
"Một nhà đầu tư nổi tiếng vừa bán hết cổ phiếu Apple.",
"P/E chỉ khoảng 10–11 lần.",
"Công ty có hơn 200 tỷ USD tiền mặt và đang mua lại cổ phiếu mạnh.",
"Mảng dịch vụ tăng trưởng đều."],
l:"Chu kỳ iPhone mới và dịch vụ giúp cổ phiếu tăng khoảng 65%. P/E rất thấp cho một công ty còn mạnh thường là giá hời."},

{n:"BP",t:"BP",s:"Dầu khí",w:"Tháng 6/2010",c:60,f:[
"Giàn khoan của công ty phát nổ, gây vụ tràn dầu lớn nhất lịch sử Mỹ, dầu vẫn đang rò rỉ.",
"Cổ phiếu mất khoảng một nửa giá trị.",
"Công ty bị buộc lập quỹ bồi thường 20 tỷ USD và tạm ngừng trả cổ tức.",
"Có tin đồn công ty có thể phá sản.",
"Các mảng kinh doanh khác trên toàn cầu vẫn hoạt động bình thường."],
l:"Giếng dầu được bịt lại, chi phí lớn nhưng công ty không phá sản; cổ phiếu tăng khoảng 60%. Thị trường hay định giá thảm họa như kịch bản tệ nhất."},

{n:"Equifax",t:"EFX",s:"Xếp hạng tín dụng",w:"Tháng 9/2017",c:40,f:[
"Công ty bị hack, lộ dữ liệu cá nhân của khoảng 147 triệu người Mỹ.",
"Cổ phiếu mất khoảng 35% chỉ trong vài tuần.",
"CEO từ chức; nhiều vụ kiện được đệ trình.",
"Công ty là một trong ba đơn vị xếp hạng tín dụng lớn nhất nước Mỹ.",
"Ngân hàng vẫn bắt buộc cần dữ liệu tín dụng để cho vay."],
l:"Khách hàng không có nhiều lựa chọn thay thế; doanh nghiệp vẫn chạy và cổ phiếu hồi khoảng 40%. Doanh nghiệp gần như độc quyền thường sống sót qua bê bối."},

{n:"General Electric",t:"GE",s:"Tập đoàn công nghiệp",w:"Tháng 11/2017",c:-55,f:[
"Công ty vừa cắt cổ tức một nửa, lần thứ hai trong lịch sử.",
"Cổ phiếu đã giảm khoảng 40% trong năm.",
"Mảng điện (tua-bin) đang suy yếu mạnh.",
"Công ty có nợ lớn và các khoản bảo hiểm cũ chưa rõ rủi ro.",
"CEO mới tuyên bố tái cấu trúc."],
l:"Nhiều vấn đề hơn dự kiến lộ ra, cổ tức gần như bị cắt hết, cổ phiếu mất thêm hơn một nửa. Cắt cổ tức thường là tín hiệu vấn đề sâu hơn."},

{n:"Valeant Pharmaceuticals",t:"VRX",s:"Dược phẩm",w:"Tháng 8/2015",c:-90,f:[
"Cổ phiếu tăng hơn 10 lần trong vài năm.",
"Công ty tăng trưởng chủ yếu nhờ mua lại công ty khác và tăng giá thuốc rất mạnh.",
"Công ty gánh khoản nợ khoảng 30 tỷ USD.",
"Nhiều quỹ đầu tư nổi tiếng đang nắm giữ cổ phiếu.",
"Chính trị gia bắt đầu chỉ trích việc tăng giá thuốc."],
l:"Lộ ra các vấn đề kế toán và nhà thuốc liên kết, giá thuốc bị siết; cổ phiếu mất khoảng 90%. Tăng trưởng nhờ nợ + tăng giá vô lý thì không bền, dù quỹ lớn có mua."},

{n:"Enron",t:"ENE",s:"Năng lượng · Giao dịch",w:"Tháng 8/2001",c:-99,f:[
"Từng được tạp chí kinh doanh bình chọn là công ty sáng tạo nhất nước Mỹ nhiều năm liền.",
"CEO bất ngờ từ chức chỉ sau vài tháng nhậm chức, vì \"lý do cá nhân\".",
"Báo cáo tài chính rất phức tạp, khó hiểu công ty kiếm tiền thế nào.",
"Cổ phiếu đã giảm khoảng một nửa từ đỉnh.",
"Ban lãnh đạo nói công ty \"chưa bao giờ mạnh hơn\"."],
l:"Gian lận kế toán bị phanh phui, công ty phá sản trong vài tháng. Nếu không hiểu công ty kiếm tiền thế nào và lãnh đạo bỏ đi đột ngột, hãy tránh xa."}
];

/* ---- More situations (each with source links shown after you answer) ---- */
SCENARIOS.push(
{n:"NVIDIA",t:"NVDA",s:"Chip bán dẫn",w:"Tháng 5/2023",c:170,f:[
"Doanh thu quý khoảng 7 tỷ USD, lợi nhuận hơn 2 tỷ USD, đều vượt dự báo của giới phân tích.",
"Công ty dự báo doanh thu quý tới khoảng 11 tỷ USD, tăng 64% so với cùng kỳ, trong khi giới phân tích chỉ dự báo khoảng 7,2 tỷ USD.",
"Cổ phiếu tăng 24% trong một ngày, thêm khoảng 184 tỷ USD vốn hóa, đưa công ty tới sát mốc 1.000 tỷ USD.",
"Một công ty chứng khoán ví đây là \"cơn sốt vàng mới\" và công ty này đang bán \"cuốc xẻng\" cho cả ngành AI.",
"Dù vậy, công ty vẫn là cổ phiếu đắt nhất trong chỉ số bán dẫn, nơi các hãng chip giao dịch trung bình khoảng 26 lần lợi nhuận dự phóng."],
l:"Nhu cầu chip AI tiếp tục bùng nổ, công ty vượt dự báo quý này qua quý khác và cổ phiếu tăng khoảng 2,8 lần. Đắt chưa chắc là bong bóng: khi lợi nhuận tăng nhanh hơn giá, cổ phiếu thực ra đang rẻ đi.",
src:[{t:"AP: Nvidia stuns markets (TechXplore)",u:"https://techxplore.com/news/2023-05-nvidia-stuns-artificial-intelligence-reshape.html"},{t:"Bloomberg: Nvidia's $184 Billion Jump in Five Charts",u:"https://www.bnnbloomberg.ca/nvidia-s-184-billion-jump-in-five-charts-1.1925275"}]},

{n:"Meta Platforms",t:"META",s:"Mạng xã hội · Quảng cáo",w:"Tháng 2/2022",c:-20,f:[
"Lần đầu tiên trong 18 năm, số người dùng Facebook hằng ngày giảm: từ 1,93 tỷ xuống 1,929 tỷ, mất khoảng 1 triệu người.",
"Cổ phiếu giảm khoảng 26% trong một ngày, xóa hơn 230 tỷ USD vốn hóa, mức mất giá một ngày lớn nhất lịch sử chứng khoán Mỹ.",
"Công ty ước tính thay đổi quyền riêng tư trên iPhone có thể làm mất khoảng 10 tỷ USD doanh thu quảng cáo trong năm.",
"Năm vừa rồi công ty vẫn lãi khoảng 39,4 tỷ USD trên doanh thu 118 tỷ USD.",
"CEO thừa nhận đang khó cạnh tranh với TikTok; công ty đã đầu tư hơn 10 tỷ USD vào mảng thực tế ảo trong năm."],
l:"Giảm 26% vẫn chưa phải đáy: cả năm đó quảng cáo yếu đi và chi phí metaverse tăng, cổ phiếu rơi tiếp xuống khoảng 90 USD trước khi hồi lại. So với tình huống Meta tháng 11/2022, cùng một công ty nhưng thời điểm mua quyết định tất cả.",
src:[{t:"MediaPost: Meta Shares Plunge As Facebook Reports First User Loss",u:"https://www.mediapost.com/publications/article/370869/meta-shares-plunge-20-as-facebook-reports-first-e.html"},{t:"Fortune: Facebook loses $230 billion",u:"https://fortune.com/2022/02/03/facebook-earnings-market-cap-stock-market-zuckerberg-tiktok-metaverse/"}]},

{n:"CrowdStrike",t:"CRWD",s:"An ninh mạng",w:"Tháng 7/2024",c:80,f:[
"Một bản cập nhật lỗi của công ty làm khoảng 8,5 triệu máy Windows bị sập. Con số này chưa tới 1% số máy Windows nhưng làm tê liệt sân bay, ngân hàng và bệnh viện.",
"Cổ phiếu giảm khoảng 11% ngày đầu và thêm 13,5% phiên kế tiếp, về khoảng 264 USD. Chỉ 10 ngày trước, giá vừa lập đỉnh 52 tuần khoảng 398 USD.",
"Ít nhất hai công ty chứng khoán hạ khuyến nghị từ \"mua\" xuống \"giữ\".",
"Một hãng hàng không lớn nói sự cố làm họ thiệt hại khoảng 500 triệu USD và có thể khởi kiện.",
"Cổ phiếu một đối thủ nhỏ hơn tăng hơn 20% vì nhà đầu tư nghĩ khách hàng sẽ chuyển sang."],
l:"Rất ít khách hàng bỏ đi vì đổi hệ thống bảo mật vừa tốn kém vừa rủi ro; công ty bồi thường bằng giảm giá và cổ phiếu tăng khoảng 80%, lập đỉnh mới trong vòng một năm. Sự cố gây ồn ào nhưng không phá vỡ lợi thế cạnh tranh thì thường là cơ hội.",
src:[{t:"TechCrunch: Microsoft says 8.5M Windows devices were affected",u:"https://techcrunch.com/2024/07/20/microsoft-says-8.5m-windows-devices-were-affected-by-crowdstrike-outage"},{t:"Fortune: CrowdStrike outage and rivals",u:"https://fortune.com/2024/07/23/crowdstrike-cybersecurity-microsoft-windows-outage-falcon-george-kurtz-sentinelone-wiz-mcafee/"}]},

{n:"Boeing",t:"BA",s:"Sản xuất máy bay",w:"Tháng 1/2024",c:-25,f:[
"Một tấm bịt cửa thoát hiểm văng khỏi chiếc 737 MAX 9 mới giao khi đang bay ở độ cao khoảng 16.000 feet; không ai bị thương nặng.",
"Cơ quan hàng không Mỹ yêu cầu dừng bay 171 chiếc cùng cấu hình để kiểm tra; một hãng bay tìm thấy bu-lông lỏng trên đội máy bay của họ.",
"Cổ phiếu giảm khoảng 8–10% trong những ngày đầu, mất hơn 9 tỷ USD vốn hóa.",
"Dòng MAX 9 chỉ chiếm khoảng 2% số đơn hàng tồn của công ty.",
"Một ngân hàng lớn giữ khuyến nghị mua, cho rằng ngành máy bay chỉ có hai hãng lớn nên khách hàng khó bỏ đi."],
l:"Điều tra lộ ra vấn đề chất lượng sản xuất có hệ thống: cơ quan quản lý giới hạn sản lượng, CEO từ chức, rồi đình công kéo dài. Cổ phiếu giảm thêm khoảng 25%. Một sự cố \"nhỏ\" có thể là triệu chứng của vấn đề lớn hơn bên trong."
,src:[{t:"Spokesman-Review / NYT: Boeing's stock drops",u:"https://www.spokesman.com/stories/2024/jan/08/boeings-stock-drops-as-investors-assess-fallout-fr"},{t:"Fortune: BofA says duopoly makes Boeing almost untouchable",u:"https://fortune.com/2024/01/08/boeing-stock-outlook-bank-of-america-737-max-incident/"}]},

{n:"Chegg",t:"CHGG",s:"Giáo dục trực tuyến",w:"Tháng 5/2023",c:-50,f:[
"CEO cho biết từ tháng 3, sinh viên quan tâm tới ChatGPT tăng vọt và điều này đang ảnh hưởng tốc độ có khách hàng mới.",
"Cổ phiếu giảm 48% trong một ngày, đóng cửa khoảng 9,08 USD; hồi đầu 2021 từng trên 100 USD.",
"Công ty ngừng đưa dự báo cả năm vì \"còn quá sớm để biết\"; dự báo doanh thu quý tới 175–178 triệu USD, thấp hơn mức 186,3 triệu USD thị trường kỳ vọng.",
"Doanh thu và lợi nhuận quý vừa rồi vẫn vượt dự báo.",
"Công ty đang ra trợ lý AI riêng dựa trên GPT-4; CEO gọi cú bán tháo là phản ứng \"thái quá\"."],
l:"Sản phẩm chính (giải bài tập) bị AI miễn phí thay thế, số thuê bao tiếp tục giảm và cổ phiếu mất thêm khoảng một nửa. Khi đối thủ miễn phí làm được việc của bạn, dùng chính công nghệ của đối thủ chưa chắc đã cứu được.",
src:[{t:"CNBC: Chegg CEO calls 48% stock plunge 'extraordinarily overblown'",u:"https://www.cnbc.com/2023/05/02/chegg-ceo-chatgpt-stock-plunge-was-extraordinarily-overblown.html"},{t:"Business Today: ChatGPT popularity impacts Chegg",u:"https://businesstoday.in/technology/news/story/chatgpt-popularity-impacts-us-tech-company-almost-50-market-value-wiped-off-379787-2023-05-03"}]},

{n:"Nike",t:"NKE",s:"Đồ thể thao",w:"Tháng 6/2024",c:-5,f:[
"Công ty dự báo doanh thu quý tới giảm khoảng 10%, tệ hơn nhiều so với mức giảm 3,2% giới phân tích dự đoán, và doanh thu cả năm cũng sẽ giảm.",
"Cổ phiếu giảm khoảng 20% trong một ngày, tệ nhất lịch sử công ty, xóa khoảng 28 tỷ USD và đóng cửa 75,36 USD.",
"Các dòng giày kinh điển bán chậm, doanh số online và ở Trung Quốc yếu.",
"Các thương hiệu mới như Hoka, On, Asics, New Balance chiếm khoảng 35% thị phần toàn cầu năm trước, so với khoảng 20% giai đoạn 2013–2020.",
"Công ty đang cắt giảm 2 tỷ USD chi phí trong 3 năm; ít nhất 6 công ty chứng khoán hạ khuyến nghị."],
l:"Vài tháng sau công ty đổi CEO, nhưng xoay chuyển một thương hiệu lớn rất chậm; một năm sau giá vẫn quanh mức cũ, thấp hơn một chút. Thương hiệu mạnh rớt giá chưa chắc sẽ bật lại nhanh."
,src:[{t:"Al Jazeera: Nike stock plunges on surprise forecast",u:"https://www.aljazeera.com/economy/2024/6/28/nike-stock-plunges-on-surprise-forecast-of-drop-in-sales"},{t:"Business Standard / Reuters: Nike stock sinks",u:"https://www.business-standard.com/amp/world-news/nike-stock-sinks-18-6-as-gloomy-sales-forecast-fans-growth-concerns-124062801229_1.html"}]},

{n:"Rivian",t:"RIVN",s:"Xe điện",w:"Tháng 11/2021",c:-80,f:[
"Công ty vừa lên sàn, huy động khoảng 12 tỷ USD, thương vụ IPO lớn nhất năm.",
"Vốn hóa vượt 100 tỷ USD, cao hơn cả GM và Ford, dù mới sản xuất được vài trăm chiếc xe.",
"Công ty lỗ gần 1 tỷ USD chỉ trong nửa đầu năm.",
"Công ty có khoảng 55.400 đơn đặt trước và hợp đồng 100.000 xe tải giao hàng điện với một tập đoàn thương mại điện tử lớn (cũng là cổ đông).",
"Ford, GM và Tesla đều sắp ra xe bán tải điện cạnh tranh trực tiếp."],
l:"Sản xuất chậm, chuỗi cung ứng khó khăn, lãi suất tăng; cổ phiếu mất khoảng 3/4. Định giá như một gã khổng lồ khi chưa chứng minh được khả năng sản xuất hàng loạt là đặt cược rất rủi ro."
,src:[{t:"Al Jazeera / Bloomberg: Rivian is now biggest US company by market value with no revenue",u:"https://www.aljazeera.com/economy/2021/11/12/rivian-is-now-biggest-us-company-by-market-value-with-no-revenue"},{t:"Fortune: Rivian shares surge 29% after IPO",u:"https://fortune.com/2021/11/10/rivian-shares-surge-ipo-first-day-trading-electric-car-gm-ford/"}]},

{n:"Tesla",t:"TSLA",s:"Xe điện",w:"Tháng 11/2021",c:-50,f:[
"Vốn hóa vượt 1.000 tỷ USD, hãng xe giá trị nhất thế giới; cổ phiếu tăng khoảng 65% từ đầu năm.",
"Một hãng cho thuê xe công bố đặt mua 100.000 xe, nhưng sau đó CEO nói hợp đồng \"chưa được ký\".",
"CEO hỏi người theo dõi trên mạng xã hội có nên bán 10% cổ phần (hơn 20 tỷ USD) không; khoảng 58% trong hơn 3,5 triệu phiếu bảo \"có\".",
"Doanh thu quý gần nhất tăng 57% lên khoảng 13,76 tỷ USD.",
"Một startup xe điện vừa lên sàn đã được định giá hơn 100 tỷ USD; các hãng xe lớn đang đổ tiền vào xe điện."],
l:"CEO bán cổ phiếu hàng chục tỷ USD, lãi suất tăng và cổ phiếu tăng trưởng bị bán mạnh; một năm sau giá còn khoảng một nửa. Khi cả thị trường hưng phấn tột độ với một ngành, rủi ro giảm giá thường rất lớn."
,src:[{t:"AP: Musk: I'll sell 10% of Tesla stock based on Twitter poll",u:"https://techxplore.com/news/2021-11-twitter-votes-elon-musk-percent.html"},{t:"Reuters: Elon Musk sells $5 bln in Tesla shares after Twitter poll",u:"https://www.dailymaverick.co.za/article/2021-11-11-elon-musk-sells-5-bln-in-tesla-shares-after-twitter-poll/"}]},

{n:"Netflix",t:"NFLX",s:"Phim trực tuyến",w:"Tháng 7/2019",c:50,f:[
"Công ty mất khoảng 130.000 thuê bao ở Mỹ, lần đầu tiên kể từ năm 2011.",
"Thuê bao mới ở nước ngoài chỉ khoảng 2,83 triệu, thấp hơn nhiều mức 4,8 triệu thị trường dự báo.",
"Công ty vừa tăng giá ở nhiều nước; một khảo sát cho thấy 81% người dùng Mỹ nói sẽ hủy nếu giá tăng thêm 5 USD/tháng.",
"Cổ phiếu giảm khoảng 10–12%, về khoảng 324 USD, dù doanh thu vẫn tăng 26%.",
"Công ty chi hơn 3 tỷ USD cho nội dung trong quý và vẫn đốt tiền; các tập đoàn lớn sắp ra dịch vụ cạnh tranh."],
l:"Thuê bao tăng lại ngay quý sau, rồi giãn cách xã hội năm sau làm nhu cầu xem phim bùng nổ; cổ phiếu tăng khoảng 50%. Có yếu tố may mắn, nhưng một quý xấu thường không đổi được xu hướng dài hạn."
,src:[{t:"Reuters: Netflix shares plunge as US customers shrink",u:"https://tribune.com.pk/story/2015969/entertainment"},{t:"Silicon Republic: first decline in US subscribers since 2011",u:"https://siliconrepublic.com/?p=826318"}]},

{n:"AMD",t:"AMD",s:"Chip bán dẫn",w:"Tháng 1/2016",c:400,f:[
"Doanh thu quý giảm khoảng 23%; công ty dự báo quý tới giảm thêm khoảng 14%.",
"Cổ phiếu chỉ còn khoảng 1,95 USD; nếu dưới 1 USD trong 30 ngày, sàn có thể bắt đầu hủy niêm yết.",
"Công ty có 785 triệu USD tiền mặt nhưng nợ 2,26 tỷ USD, và dự kiến đốt khoảng 100 triệu USD trong quý tới.",
"Kiến trúc chip mới (Zen) dự kiến ra cuối năm, được xem là sản phẩm \"được ăn cả, ngã về không\".",
"Lỗ đang thu hẹp nhờ biên lợi nhuận cải thiện; công ty vẫn có hợp đồng cung cấp chip cho máy chơi game console."],
l:"Chip mới thành công vượt mong đợi, cổ phiếu tăng khoảng 5 lần trong năm và hàng chục lần sau đó. Đặt cược vào một sản phẩm duy nhất rất rủi ro, nhưng nếu thắng thì lợi nhuận khổng lồ."
,src:[{t:"CIO: AMD revenue falls 22 percent",u:"https://www.cio.de/a/amd-revenue-falls-22-percent-as-normally-dependable-console-chips-falter,3252948"},{t:"Motley Fool: Can AMD survive in 2016?",u:"https://www.fool.com/investing/general/2016/01/26/can-advanced-micro-devices-inc-survive-in-2016.aspx"}]}
);

/* source links for earlier situations that were checked against articles */
const SRC_EXTRA = {
"META|Tháng 11/2022":[{t:"Motley Fool: Is Meta Platforms stock a buy?",u:"https://www.fool.com/investing/2022/11/29/is-meta-platforms-stock-a-buy"}],
"NFLX|Tháng 4/2022":[{t:"Bloomberg: Netflix loses 200,000 customers",u:"https://www.bloomberg.com/news/articles/2022-04-19/netflix-loses-200-000-customers-its-first-decline-in-a-decade"},{t:"S&P Global: Netflix changes tack on ads, password sharing",u:"https://www.spglobal.com/market-intelligence/en/news-insights/articles/2022/4/netflix-changes-tack-on-ads-password-sharing-after-historic-membership-loss-69908261"}],
"ZM|Tháng 10/2020":[{t:"EasyEquities: Is there still room to ZOOM?",u:"https://research.easyequities.co.za/zoom-stock-analysis"}],
"NVDA|Tháng 10/2022":[{t:"Investing.com: Is NVIDIA stock getting too cheap to ignore?",u:"https://investing.com/analysis/is-nvida-stock-getting-too-cheap-to-ignore-200631143"},{t:"NVIDIA Q3 FY23 CFO commentary (SEC)",u:"https://www.sec.gov/Archives/edgar/data/1045810/000104581022000163/q3fy23cfocommentary.htm"}],
"BA|Tháng 3/2019":[{t:"Global Finance: Boeing crashes its growth model",u:"https://gfmag.com/magazine/april-2019/boeing-crashes-its-growth-model"}],
"AAPL|Tháng 1/2019":[{t:"Seeking Alpha: Apple, a China problem or an iPhone problem?",u:"https://seekingalpha.com/article/4233555-apple-a-china-problem-or-an-iphone-problem"}],
"PTON|Tháng 11/2021":[{t:"AP: Peloton's stock has a tumble (Arkansas Democrat-Gazette)",u:"https://www.arkansasonline.com/news/2021/nov/06/pelotons-stock-has-a-tumble/"},{t:"Reuters: Peloton's value drops $9.2 billion",u:"https://archives.lincolndailynews.com/2021/Nov/06/NEWS/business_g.shtml"}],
"GME|Cuối tháng 1/2021":[{t:"Wikipedia: GameStop short squeeze",u:"https://en.wikipedia.org/wiki/GameStop_short_squeeze"},{t:"Timeline of the GameStop short squeeze",u:"https://bakercityherald.com/?p=166427"}],
"TSLA|Tháng 1/2023":[{t:"Reuters: Tesla turns up heat on rivals with global price cuts (Euronews)",u:"https://www.euronews.com/2023/01/13/tesla-usa-prices"},{t:"Fortune / AP: Tesla suddenly slashes prices",u:"https://fortune.com/2023/01/13/tesla-slashes-prices-model-y-suv-20-percent-inflation-reduction-act-incentives-tax-credit-elon-musk/"}],
"AMZN|Tháng 1/2023":[{t:"Axios: Amazon to cut 18,000 jobs",u:"https://www.axios.com/2023/01/05/amazon-layoffs-18000-jobs"},{t:"Reuters: Amazon CEO says company will axe more than 18,000 jobs (CBC)",u:"https://www.cbc.ca/lite/story/1.6704324"}],
"GOOGL|Tháng 2/2023":[{t:"NPR: Google shares drop $100 billion after its new AI chatbot makes a mistake",u:"https://www.npr.org/2023/02/09/1155650909/google-chatbot--error-bard-shares"},{t:"Reuters: Alphabet shares dive after AI Bard flubs answer (China Daily)",u:"https://chinadailyhk.com/article/314285"}],
"F|Tháng 11/2008":[{t:"CNN Money: Ford gets its Blue Oval logo out of hock",u:"https://money.cnn.com/2012/05/22/autos/ford-investment-grade/index.htm"},{t:"Spokesman-Review: Ford's big bet",u:"https://www.spokesman.com/stories/2008/dec/11/fords-big-bet"}],
"LEH|Tháng 3/2008":[{t:"Wikipedia: Bankruptcy of Lehman Brothers",u:"https://en.wikipedia.org/wiki/Bankruptcy_of_Lehman_Brothers"}],
"BAC|Tháng 3/2009":[{t:"Reuters: Bank of America soars, CEO says bank in the black",u:"https://www.eleconomista.es/ecomotor/formula-1/amp/1096015/Bank-of-America-soars-CEO-says-bank-in-the-black"},{t:"Bloomberg: Lewis, Dimon, Pandit proclaim profits",u:"https://www.business-standard.com/amp/article/finance/lewis-dimon-pandit-proclaim-profits-spur-banks-109031600003_1.html"}],
"SIVB|Tháng 2/2023":[{t:"Wikipedia: Collapse of Silicon Valley Bank",u:"https://en.wikipedia.org/wiki/Collapse_of_Silicon_Valley_Bank"},{t:"Chicago Booth: SVB and held-to-maturity accounting",u:"https://bfi.uchicago.edu/?p=42663"}],
"CVNA|Tháng 12/2022":[{t:"Kiplinger: Carvana stock plunges amid bankruptcy chatter",u:"https://kiplinger.com/investing/stocks/carvana-stock-plunges-amid-bankruptcy-chatter"},{t:"CNN: Carvana bankruptcy worries",u:"https://abc7chicago.com/carvana-used-car-retailer-bankruptcy-news/12547480/"}],
"UBER|Tháng 12/2022":[{t:"Uber Q3 2022 results (SEC filing)",u:"https://www.sec.gov/Archives/edgar/data/1543151/000154315122000029/uberq322earningspressrelea.htm"},{t:"CNBC: Uber Q3 2022 earnings",u:"https://www.cnbc.com/2022/11/01/uber-q3-2022-earnings.html"}],
"ENE|Tháng 8/2001":[{t:"Wikipedia: Enron scandal",u:"https://en.wikipedia.org/wiki/Enron_scandal"}]
};
SCENARIOS.forEach(x => { if (!x.src) x.src = SRC_EXTRA[`${x.t}|${x.w}`] || null; });

/* ---- Situations with a financial-numbers panel (fin) and price snapshots ---- */
SCENARIOS.push(
{n:"Microsoft",t:"MSFT",s:"Phần mềm · Đám mây",w:"Tháng 1/2023",f:[
"Công ty vừa công bố cắt giảm 10.000 nhân sự và ghi nhận khoản chi phí liên quan.",
"Công ty đang chuẩn bị rót khoảng 10 tỷ USD vào một công ty khởi nghiệp AI đang gây sốt với chatbot của họ.",
"Mảng máy tính cá nhân yếu: doanh thu Windows bán kèm máy mới giảm mạnh, thiết bị phần cứng cũng giảm.",
"Đám mây vẫn tăng trưởng hai chữ số; CEO nói một \"làn sóng điện toán mới\" đang hình thành nhờ AI.",
"Doanh thu quý hơi thấp hơn kỳ vọng của giới phân tích."],
fin:[["Doanh thu quý","$52,7 tỷ (+2%)"],["Lợi nhuận hoạt động","$20,4 tỷ (−8%)"],["Lợi nhuận ròng","$16,4 tỷ (−12%)"],["EPS","$2,20 (−11%)"],["Doanh thu đám mây","$27,1 tỷ (+22%)"],["Azure & đám mây khác","+31%"],["Windows bán kèm máy mới","−39%"],["Trả cho cổ đông trong quý","$9,7 tỷ"]],
l:"Khoản đầu tư AI biến công ty thành người dẫn đầu cuộc đua AI; doanh thu đám mây tăng tốc và cổ phiếu tăng gần 70% trong năm. Khi mảng cũ (Windows) yếu nhưng mảng mới (đám mây + AI) mạnh, hãy nhìn vào nơi tương lai đang đến.",
src:[{t:"Microsoft FY23 Q2 earnings release",u:"https://www.microsoft.com/en-us/investor/earnings/FY-2023-Q2/press-release-webcast"},{t:"Futurum: Microsoft revenue hits $52.7B",u:"https://futurumgroup.com/insights/microsoft-revenue-hits-52-7b-for-q2-fy23-up-2-yoy"}]},

{n:"Intel",t:"INTC",s:"Chip bán dẫn",w:"Tháng 8/2024",f:[
"Công ty cắt khoảng 15% nhân sự (khoảng 15.000 người) trong kế hoạch tiết kiệm hơn 10 tỷ USD.",
"Công ty ngừng trả cổ tức từ quý cuối năm.",
"CEO viết trong thư gửi nhân viên: doanh thu không tăng như kỳ vọng, chi phí quá cao, biên lợi nhuận quá thấp.",
"Mảng sản xuất chip thuê (foundry) lỗ nặng; công ty bị tụt lại trong làn sóng chip AI.",
"Cổ phiếu giảm khoảng 20% sau giờ giao dịch khi công bố kết quả."],
fin:[["Doanh thu quý","$12,8 tỷ (−1%)"],["Lợi nhuận ròng","−$1,6 tỷ (cùng kỳ lãi $1,5 tỷ)"],["EPS","−$0,38 (dự báo +$0,10)"],["Biên lợi nhuận gộp","35,4%"],["Dòng tiền hoạt động","$2,3 tỷ"],["Mảng foundry","lỗ $2,8 tỷ"],["Tiền mặt","$11,3 tỷ"],["Dự báo quý tới","$12,5–13,5 tỷ"]],
l:"Giá còn rơi thêm nhiều tháng, CEO rời ghế cuối năm; về sau có tin chính phủ và đối tác lớn rót vốn nên giá hồi phần nào, nhưng sau 1 năm vẫn thấp hơn khoảng 10%. Cắt cổ tức + lỗ ở mảng đặt cược lớn thường là dấu hiệu cuộc xoay chuyển còn dài.",
src:[{t:"CNN: Intel lays off 15% of its staff",u:"https://abc17news.com/money/cnn-business-consumer/2024/08/01/intel-lays-off-15-of-its-staff-and-its-stock-tumbles-as-it-struggles-to-turn-around-its-ailing-business/"},{t:"Quartr: Intel Q2 2024 earnings summary",u:"https://quartr.com/events/intel-corporation-intc-q2-2024_3sbEYaXB"}]},

{n:"Netflix",t:"NFLX",s:"Phim trực tuyến",w:"Tháng 1/2022",f:[
"Cổ phiếu giảm khoảng 20% chỉ sau một đêm vì dự báo thuê bao quý tới quá thấp.",
"Thuê bao mới cả năm chỉ bằng khoảng một nửa năm trước đó, khi mọi người ở nhà vì dịch.",
"Công ty thừa nhận các dịch vụ đối thủ đang ảnh hưởng đến tăng trưởng.",
"Quý tới công ty có ít phim/series lớn ra mắt.",
"Công ty vừa tăng giá gói ở Mỹ và Canada."],
fin:[["Doanh thu quý","$7,71 tỷ (+16%)"],["EPS","$1,33 (dự báo $0,82)"],["Thuê bao mới trong quý","8,28 triệu (tổng 221,8 triệu)"],["Dự báo thuê bao mới quý tới","2,5 triệu (thị trường kỳ vọng ~6,9 triệu)"],["Thuê bao mới cả năm","18,2 triệu (năm trước ~37 triệu)"],["Doanh thu mỗi thuê bao","$11,58/tháng"]],
l:"Đây mới là cú rơi đầu: 3 tháng sau công ty báo mất thuê bao và giá rơi tiếp gần một nửa. Gói quảng cáo và chặn chia sẻ mật khẩu giúp hồi phục, nhưng sau 1 năm vẫn thấp hơn khoảng 14%. Dự báo yếu từ chính công ty là tín hiệu cần nghe kỹ.",
src:[{t:"XTB: Netflix plunged 20% after Q4 earnings",u:"https://www.xtb.com/int/market-analysis/news-and-research/netflix-plunged-20-after-q4-earnings"},{t:"Light Reading: Netflix stock tumbles on subscriber miss",u:"https://www.lightreading.com/video-media/netflix-stock-price-tumbles-on-subscriber-miss-/d/d-id/774730"}]},

{n:"Target",t:"TGT",s:"Bán lẻ",w:"Tháng 5/2022",f:[
"Cổ phiếu giảm khoảng 25% trong một ngày, tệ nhất kể từ năm 1987.",
"Chi phí vận chuyển, nhiên liệu và lương nhân viên tăng mạnh vì chuỗi cung ứng tắc nghẽn.",
"Khách vẫn mua đồ thiết yếu nhưng bớt mua TV, đồ gia dụng; hàng tồn kho phải giảm giá.",
"Một đối thủ bán lẻ lớn hơn cũng vừa có ngày giảm mạnh nhất 35 năm vì lý do tương tự.",
"CEO: đã lường trước việc chi tiêu chậm lại sau khi hết tiền hỗ trợ, nhưng không ngờ mức độ lớn như vậy."],
fin:[["Doanh thu quý","$24,8 tỷ (+4%)"],["Lợi nhuận ròng","$1,01 tỷ (−52%)"],["EPS điều chỉnh","$2,19 (dự báo ~$3,07)"],["Doanh số cửa hàng cũ","+3,4% (năm trước +18%)"],["Doanh số online","+3,2% (năm trước +50%)"]],
l:"Công ty xử lý hàng tồn kho trong vài quý, lợi nhuận hồi dần; sau 1 năm giá gần như đi ngang (khoảng −5%). Giảm 25% vì vấn đề tạm thời không đảm bảo bật lại nhanh khi cả ngành bán lẻ đang khó."
,src:[{t:"CNN: Target posts a stunning drop in profit",u:"https://ktvz.com/money/cnn-business-consumer/2022/05/18/target-posts-a-stunning-drop-in-profit-stock-plunges/"},{t:"Seeking Alpha: Target down after Walmart",u:"https://seekingalpha.com/article/4512952-target-down-after-walmart"}]},

{n:"PayPal",t:"PYPL",s:"Thanh toán điện tử",w:"Tháng 2/2022",f:[
"Cổ phiếu giảm khoảng 25% trong một ngày sau báo cáo quý.",
"Công ty hạ dự báo tăng trưởng và số tài khoản mới năm tới thấp hơn nhiều so với kỳ vọng.",
"Công ty loại bỏ 4,5 triệu tài khoản \"bất hợp pháp\" khỏi số liệu và bỏ mục tiêu 750 triệu tài khoản.",
"Một sàn thương mại điện tử lớn đang chuyển dần sang đơn vị thanh toán khác.",
"Lạm phát làm người tiêu dùng chi tiêu chậm lại."],
fin:[["Doanh thu quý","$6,92 tỷ (+13%)"],["Lợi nhuận ròng quý","$801 triệu (năm trước $1,5 tỷ)"],["EPS điều chỉnh","$1,11 (dự báo $1,12)"],["Dòng tiền tự do cả năm","$5,4 tỷ (21% doanh thu)"],["Lợi nhuận ròng cả năm","~$4,2 tỷ"],["Dự báo tăng trưởng năm tới","15–17%"],["Dự báo EPS năm tới","$4,60–4,75 (kỳ vọng $5,23)"],["Tài khoản mới dự kiến","15–20 triệu"]],
l:"Cạnh tranh từ ví điện tử khác và tăng trưởng chậm lại khiến cổ phiếu mất thêm khoảng 1/3 sau 1 năm. Dòng tiền mạnh giúp công ty sống tốt, nhưng thị trường định giá lại khi \"cổ phiếu tăng trưởng\" thành \"cổ phiếu chậm\"."
,src:[{t:"Motley Fool: PayPal shares plunge 25%",u:"https://www.fool.com/investing/2022/02/02/paypal-shares-plunge-25-heres-why-its-down-so-shar/"},{t:"Motley Fool: 426 million reasons to love PayPal",u:"https://www.fool.com/investing/2022/02/08/426-million-reasons-to-love-paypal-stock-right-now"}]},

{n:"Starbucks",t:"SBUX",s:"Chuỗi cà phê",w:"Tháng 8/2024",f:[
"Công ty bất ngờ thay CEO sau khoảng 17 tháng, mời CEO của một chuỗi đồ ăn nhanh nổi tiếng về.",
"Cổ phiếu tăng khoảng 24,5% trong một ngày, mức tăng trong ngày lớn nhất lịch sử, xóa hết mức giảm từ đầu năm.",
"Dưới thời CEO mới, chuỗi cũ của ông gần gấp đôi doanh thu và cổ phiếu tăng gần 800%.",
"Doanh số giảm ở Mỹ; ở Trung Quốc khách chuyển sang thương hiệu rẻ hơn; một số nơi bị tẩy chay.",
"Một quỹ đầu tư chủ động nắm cổ phần lớn đang gây áp lực đòi thay đổi."],
fin:[["Doanh số cửa hàng cũ (Mỹ)","−2%"],["Doanh số cửa hàng cũ (toàn cầu)","−3%"],["Doanh thu quý trước","−2%, lần giảm đầu tiên từ cuối 2020"],["Số cửa hàng","~38.000 (Trung Quốc ~6.500)"],["Doanh số cửa hàng cũ của chuỗi CEO mới rời đi","+11%"]],
l:"Kỳ vọng vào CEO mới được đẩy lên giá ngay trong một ngày; việc sửa chữa mất nhiều quý và doanh số vẫn yếu, nên sau 1 năm giá gần như đi ngang. Tin tốt đã vào giá thì mua đuổi thường không còn lời."
,src:[{t:"AP: Starbucks names Chipotle chief Brian Niccol CEO",u:"https://www.clickondetroit.com/business/2024/08/13/starbucks-replaces-its-ceo-names-chipotle-chief-to-head-the-company/"},{t:"Asia Economy: Starbucks stock surges over 24%",u:"https://www.asiae.co.kr/en/article/2024081407431639508"}]},

{n:"NVIDIA",t:"NVDA",s:"Chip bán dẫn",w:"Tháng 1/2025",f:[
"Một công ty AI Trung Quốc ra mắt mô hình mạnh ngang các mô hình hàng đầu của Mỹ, với chi phí huấn luyện được cho là dưới 6 triệu USD.",
"Cổ phiếu giảm khoảng 17% trong một ngày, xóa khoảng 589 tỷ USD, mức mất giá một ngày lớn nhất lịch sử chứng khoán Mỹ.",
"Nhà đầu tư lo các công ty sẽ cần ít chip đắt tiền hơn để làm AI.",
"Trước cú giảm, cổ phiếu giao dịch khoảng 60 lần lợi nhuận, so với khoảng 22 lần của S&P 500.",
"Vài ngày trước, một tập đoàn mạng xã hội lớn vừa tuyên bố tăng chi đầu tư AI lên tới 65 tỷ USD trong năm."],
fin:[["Giảm trong ngày","~17% ($142 → $118,5)"],["Vốn hóa mất","~$589 tỷ"],["P/E trước cú giảm","~60 lần (S&P 500: ~22)"],["Lợi nhuận ròng","từ $4,8 tỷ (2022) lên ước ~$66,7 tỷ (2024)"]],
l:"Các tập đoàn lớn vẫn tiếp tục tăng chi đầu tư AI; chi phí rẻ hơn lại làm AI được dùng rộng hơn. Cổ phiếu hồi lại và tăng khoảng 59% sau 1 năm. Hoảng loạn vì một tin công nghệ mới thường bị phóng đại nếu nhu cầu thật vẫn còn."
,src:[{t:"Tom's Hardware: Nvidia loses $589 billion in market cap",u:"https://www.tomshardware.com/tech-industry/artificial-intelligence/nvidia-loses-usd589-billion-in-market-cap-broad-stock-plunge-triggered-by-deepseek-ai-release"},{t:"Reuters: DeepSeek's AI model jolts global tech firms (Gulf Today)",u:"https://gulftoday.ae/news/2025/01/28/deepseeks-ai-model-jolts-global-tech-firms-as-nvidia-loses-nearly-600b-in-market-cap"}]},

{n:"Airbnb",t:"ABNB",s:"Du lịch · Cho thuê nhà",w:"Tháng 12/2020",f:[
"Hôm nay là ngày đầu lên sàn: giá IPO 68 USD nhưng đóng cửa 144,71 USD, tăng hơn gấp đôi.",
"Định giá khoảng 100 tỷ USD, lớn hơn cả 4 chuỗi khách sạn lớn nhất cộng lại.",
"Dịch bệnh làm du lịch gần như đóng băng; tháng 4 lượng đặt phòng giảm 72%.",
"Khách chuyển sang đi gần nhà và ở dài ngày hơn; quý gần nhất là quý có lãi nhiều nhất từ trước tới nay.",
"Vaccine sắp được phân phối rộng rãi."],
fin:[["Doanh thu 9 tháng","$2,5 tỷ (−32%)"],["Lỗ ròng 9 tháng","$697 triệu"],["Doanh thu quý 3","−18% (Expedia, Marriott ~−60%)"],["Định giá/doanh thu","~19–20 lần doanh thu năm tới"],["Giá IPO → đóng cửa ngày đầu","$68 → $144,71 (+113%)"]],
l:"Du lịch hồi phục mạnh và công ty bắt đầu có lãi, nhưng giá ngày đầu đã rất cao; sau 1 năm cổ phiếu tăng khoảng 25%. Mua cổ phiếu ngày IPO \"nóng\" thì phần lớn lợi nhuận đã thuộc về người mua ở giá IPO."
,src:[{t:"Silicon Republic: Airbnb shares more than double in debut",u:"https://siliconrepublic.com/?p=907324"},{t:"BusinessTech / Bloomberg: Airbnb valuation reaches $100 billion",u:"https://businesstech.co.za/news/mobile/456332/airbnb-valuation-reaches-100-billion-in-trading-debut/"}]},

{n:"Disney",t:"DIS",s:"Giải trí · Truyền thông",w:"Tháng 3/2021",f:[
"Dịch vụ phim trực tuyến của công ty vượt 100 triệu thuê bao chỉ sau 16 tháng, vượt xa mục tiêu ban đầu (60–90 triệu vào năm 2024).",
"Công ty nâng mục tiêu lên 230–260 triệu thuê bao vào năm 2024 và cam kết hơn 100 tựa phim mới mỗi năm.",
"Cổ phiếu vừa lập kỷ lục khoảng 202 USD, so với đáy khoảng 79 USD lúc dịch bệnh mới bùng phát.",
"Công viên giải trí và rạp chiếu phim vẫn bị ảnh hưởng nặng bởi dịch.",
"Đối thủ lớn nhất đang có khoảng 204 triệu thuê bao."],
fin:[["Thuê bao Disney+","100 triệu (tháng trước 94,9 triệu)"],["Mục tiêu 2024","230–260 triệu"],["Giá cổ phiếu","kỷ lục ~$202 (đáy dịch ~$79)"],["Tựa phim mới mỗi năm","100+"]],
l:"Chi phí làm phim cho dịch vụ trực tuyến rất lớn và mảng này lỗ nặng; tăng trưởng thuê bao chậm dần. Cổ phiếu mất khoảng 31% sau 1 năm. Tăng trưởng người dùng đẹp chưa đủ nếu chưa biết khi nào có lãi."
,src:[{t:"CNN: Disney+ surpasses 100 million global subscribers",u:"https://abc7ny.com/entertainment/disney+-surpasses-100-million-global-subscribers/10401119/"},{t:"Movieguide / Variety: Disney+ breaks 100 million",u:"https://www.movieguide.org/?p=550229"}]},

{n:"Apple",t:"AAPL",s:"Điện thoại · Công nghệ",w:"Tháng 3/2020",f:[
"Dịch bệnh lan khắp thế giới, thị trường chứng khoán vừa trải qua đợt giảm nhanh nhất lịch sử.",
"Công ty thông báo sẽ không đạt dự báo doanh thu quý (63–67 tỷ USD) vì nhà máy ở Trung Quốc chậm hoạt động lại.",
"Toàn bộ cửa hàng ở Trung Quốc từng phải đóng cửa; Trung Quốc chiếm khoảng 17% doanh thu.",
"Quý trước đó công ty vừa lập kỷ lục doanh thu, cả iPhone, thiết bị đeo và dịch vụ.",
"Công ty có lượng tiền mặt rất lớn."],
fin:[["Doanh thu iPhone quý trước","$56 tỷ (+8%)"],["Thiết bị đeo & phụ kiện","$10 tỷ (+37%, kỷ lục)"],["Dự báo quý (đã rút lại)","$63–67 tỷ"],["Tỷ trọng doanh thu Trung Quốc","~17%"]],
l:"Mọi người làm việc, học tập ở nhà nên mua thêm thiết bị; doanh thu lập kỷ lục mới và cổ phiếu tăng hơn gấp đôi trong 1 năm. Lúc cả thị trường hoảng loạn, doanh nghiệp mạnh thường bị bán oan."
,src:[{t:"Apple: Investor update on quarterly guidance",u:"https://www.apple.com/newsroom/2020/02/investor-update-on-quarterly-guidance/"},{t:"Computer Weekly: Tech stocks tumble as Apple admits coronavirus impact",u:"https://www.computerweekly.com/news/252478754/Tech-stocks-tumble-as-Apple-admits-Coronavirus-will-affect-iPhone-production-volumes"}]}
);
